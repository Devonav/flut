import { Router } from 'express';
import { createPost, getPosts } from '../../controllers/post.controller';
import { validate, requestSchema } from '../../middleware/validation.middleware';
import { createPostSchema } from '@my-app/shared';

const router = Router();

// Properly wrap your shared schema
router.post(
  '/', 
  validate(requestSchema(createPostSchema)), // Correctly structured
  createPost
);

router.get('/', getPosts);

export default router;