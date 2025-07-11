"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSchema = exports.createPostSchema = void 0;
const zod_1 = require("zod");
exports.createPostSchema = zod_1.z.object({
    content: zod_1.z.string()
        .min(1, 'Post cannot be empty')
        .max(280, 'Post cannot be longer than 280 characters'),
});
exports.postSchema = exports.createPostSchema.extend({
    _id: zod_1.z.string(),
    createdAt: zod_1.z.string(),
});
