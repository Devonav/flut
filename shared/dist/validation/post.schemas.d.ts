import { z } from 'zod';
export declare const createPostSchema: z.ZodObject<{
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
}, {
    content: string;
}>;
export declare const postSchema: z.ZodObject<{
    content: z.ZodString;
} & {
    _id: z.ZodString;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    _id: string;
    createdAt: string;
}, {
    content: string;
    _id: string;
    createdAt: string;
}>;
export type CreatePostInput = z.infer<typeof createPostSchema>;
export type Post = z.infer<typeof postSchema>;
