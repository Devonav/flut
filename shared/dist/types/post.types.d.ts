import { z } from 'zod';
import { createPostSchema, postSchema } from '../validation/post.schemas';
export type CreatePostInput = z.infer<typeof createPostSchema>;
export type Post = z.infer<typeof postSchema>;
