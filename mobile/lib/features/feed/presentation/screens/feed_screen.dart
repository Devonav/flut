import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:intl/intl.dart';

import '../../data/graphql/post_queries.dart';
import 'create_post_screen.dart'; // Make sure this import path is correct

class FeedScreen extends StatelessWidget {
  const FeedScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Feed'),
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: Query(
        options: QueryOptions(
          document: gql(getPostsQuery),
          pollInterval: const Duration(seconds: 15),
        ),
        builder: (QueryResult result, { VoidCallback? refetch, FetchMore? fetchMore }) {
          if (result.isLoading) {
            return const Center(child: CircularProgressIndicator());
          }

          if (result.hasException) {
            return Center(child: Text(result.exception.toString()));
          }

          final List<dynamic> posts = result.data?['posts'] as List<dynamic>? ?? [];

          if (posts.isEmpty) {
            return const Center(
              child: Text(
                'No posts yet. Be the first!',
                style: TextStyle(fontSize: 18, color: Colors.grey),
              ),
            );
          }

          // A pull-to-refresh wrapper around your list
          return RefreshIndicator(
            onRefresh: () async => refetch?.call(),
            child: ListView.builder(
              itemCount: posts.length,
              itemBuilder: (context, index) {
                final post = posts[index];
                String formattedDate = 'Just now';

                if (post['createdAt'] != null) {
                  try {
                    final DateTime parsedDate = DateTime.parse(post['createdAt']);
                    formattedDate = DateFormat.yMMMd().add_jm().format(parsedDate);
                  } catch (e) {
                    print("Could not parse date: ${post['createdAt']}");
                  }
                }

                return Card(
                  elevation: 2,
                  margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                  child: ListTile(
                    title: Padding(
                      padding: const EdgeInsets.only(top: 8.0, bottom: 8.0),
                      child: Text(post['content'] ?? 'No content'),
                    ),
                    subtitle: Padding(
                      padding: const EdgeInsets.only(bottom: 8.0),
                      child: Text('Posted: $formattedDate'),
                    ),
                  ),
                );
              },
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // 1. Implemented navigation to the CreatePostScreen
          Navigator.of(context).push(
            MaterialPageRoute(builder: (ctx) => const CreatePostScreen()),
          );
        },
        tooltip: 'Create Post',
        child: const Icon(Icons.add),
      ),
    );
  }
}