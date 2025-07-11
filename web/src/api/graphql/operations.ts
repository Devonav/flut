import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      _id
      content
      createdAt
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($content: String!) {
    createPost(postInput: { content: $content }) {
      _id
      content
      createdAt
    }
  }
`;