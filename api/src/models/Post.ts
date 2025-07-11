import { Schema, model } from 'mongoose';

// Add the 'export' keyword here
export interface IPost {
  _id: Schema.Types.ObjectId;
  content: string;
  createdAt: Date;
}

const postSchema = new Schema<IPost>({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Post = model<IPost>('Post', postSchema);

export default Post;