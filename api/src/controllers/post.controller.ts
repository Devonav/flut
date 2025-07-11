// File: /api/src/controllers/post.controller.ts

import { Request, Response } from 'express';
import Post from '../models/Post';

export const createPost = async (req: Request, res: Response) => {
  try {
    const { content } = req.body;

    // Your original, working validation
    if (!content) {
      return res.status(400).json({ message: 'Content is required' });
    }

    const newPost = new Post({ content });
    await newPost.save();
    res.status(201).json(newPost);

  } catch (error) {
    // Enhanced error logging to help us see the crash
    console.error('--- CONTROLLER CRASH ---');
    console.error(error); // Log the full error object
    res.status(500).json({
      message: 'Server error in createPost',
      // Only send the error message in the response for security
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    });
  }
};

// getPosts remains the same
export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.error('--- CONTROLLER CRASH ---');
    console.error(error);
    res.status(500).json({
      message: 'Server error in getPosts',
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    });
  }
};