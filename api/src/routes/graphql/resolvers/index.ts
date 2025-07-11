import mongoose from 'mongoose';
import { AuthenticationError } from 'apollo-server-express';
import Post, { IPost } from '../../../models/Post';
import { createPostSchema } from '@my-app/shared';
import { ZodError } from 'zod';

// KEY CHANGE: Changed `export const resolvers =` to `export default`
export default {
  RootQuery: {
    posts: async () => {
      try {
        if (mongoose.connection.readyState !== 1) {
          throw new Error('Database not connected');
        }
        const posts = await Post.find().sort({ createdAt: -1 }).lean();
        
        return posts.map((post: IPost) => ({
          _id: post._id.toString(),
          content: post.content,
          createdAt: post.createdAt.toISOString()
        }));
      } catch (err) {
        console.error('Error fetching posts:', err);
        throw new Error('An error occurred while fetching posts.');
      }
    }
  },
  RootMutation: {
    createPost: async (_: any, { postInput }: { postInput: { content: string } }) => {
      try {
        const validated = createPostSchema.parse(postInput);
        const newPost = new Post({ 
          content: validated.content,
        });
        await newPost.save();
        
        return {
          ...newPost.toObject(),
          _id: newPost._id.toString(),
          createdAt: newPost.createdAt.toISOString()
        };
      } catch (err) {
        if (err instanceof ZodError) {
          const validationErrorMessage = err.errors.map(e => e.message).join(', ');
          throw new AuthenticationError(`Validation error: ${validationErrorMessage}`);
        }
        console.error('Error creating post:', err);
        throw new Error('An error occurred while creating the post.');
      }
    }
  }
};