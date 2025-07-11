import 'package:graphql_flutter/graphql_flutter.dart';

// Your existing query
final String getPostsQuery = r'''
  query GetPosts {
    posts {
      _id
      content
      createdAt
    }
  }
''';

// ADD THIS MUTATION to the same file
final String createPostMutation = r'''
  mutation CreatePost($content: String!) {
    createPost(postInput: {content: $content}) {
      _id
      content
      createdAt
    }
  }
''';