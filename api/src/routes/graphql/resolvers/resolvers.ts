// File: /api/src/routes/graphql/resolvers.ts

import mongoose from 'mongoose';
import { AuthenticationError } from 'apollo-server-express';
import Post, { IPost } from '../../../models/Post';
import { createPostSchema } from '@my-app/shared';
import { ZodError } from 'zod';

// The export must be an object with keys that match your schema's types
export const resolvers = {
  // All query resolvers go inside the RootQuery object
  RootQuery: {
    posts: async () => {
      try {
        if (mongoose.connection.readyState !== 1) {
          throw new Error('Database not connected');
        }
        const posts = await Post.find().sort({ createdAt: -1 });
        
        return posts.map((post: IPost) => ({
          _id: post._id.toString(),
          content: post.content,
          createdAt: post.createdAt.toISOString()
        }));
      } catch (err) {
        console.error('Failed to fetch posts:', err);
        throw new Error('An error occurred while fetching posts.');
      }
    }
  },
  // All mutation resolvers go inside the RootMutation object
  RootMutation: {
    createPost: async (_: any, { postInput }: { postInput: { content: string } }) => {
      try {
        const validated = createPostSchema.parse(postInput);
        const newPost = new Post({ 
          content: validated.content,
        });
        await newPost.save();
        
        return {
          _id: newPost._id.toString(),
          content: newPost.content,
          createdAt: newPost.createdAt.toISOString()
        };
      } catch (err) {
        if (err instanceof ZodError) {
          const validationErrorMessage = err.errors.map(e => e.message).join(', ');
          throw new AuthenticationError(`Validation error: ${validationErrorMessage}`);
        }
        console.error('Failed to create post:', err);
        throw new Error('An error occurred while creating the post.');
      }
    }
  }
};