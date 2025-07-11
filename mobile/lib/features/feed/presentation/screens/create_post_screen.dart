import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

import '../../data/graphql/post_queries.dart';

class CreatePostScreen extends StatefulWidget {
  const CreatePostScreen({super.key});

  @override
  State<CreatePostScreen> createState() => _CreatePostScreenState();
}

class _CreatePostScreenState extends State<CreatePostScreen> {
  final TextEditingController _controller = TextEditingController();
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Create a New Post'),
      ),
      body: Mutation(
        options: MutationOptions(
          document: gql(createPostMutation),
          update: (GraphQLDataProxy cache, QueryResult? result) {
            if (result == null || result.hasException || result.data == null) {
              return;
            }

            // THE FIX: The Request object requires an Operation, which holds the document.
            final request = Request(
              operation: Operation(document: gql(getPostsQuery)),
            );

            final existingData = cache.readQuery(request);

            if (existingData != null) {
              final newPost = result.data!['createPost'];
              final updatedPosts = [newPost, ...existingData['posts']];
              
              cache.writeQuery(request, data: {'posts': updatedPosts});
            }
          },
          onCompleted: (dynamic resultData) {
            if (resultData != null) {
              Navigator.of(context).pop();
            }
          },
          onError: (error) {
            final errorMessage = error?.graphqlErrors.first.message ?? 'An unknown error occurred.';
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text('Failed to create post: $errorMessage'),
                backgroundColor: Theme.of(context).colorScheme.error,
              ),
            );
          },
        ),
        builder: (RunMutation runMutation, QueryResult? result) {
          return Form(
            key: _formKey,
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  TextFormField(
                    controller: _controller,
                    decoration: const InputDecoration(
                      labelText: "What's on your mind?",
                      border: OutlineInputBorder(),
                    ),
                    validator: (value) => (value?.isEmpty ?? true) ? 'Post cannot be empty' : null,
                    maxLines: 5,
                    autofocus: true,
                  ),
                  const SizedBox(height: 20),
                  ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      minimumSize: const Size(double.infinity, 50),
                      textStyle: const TextStyle(fontSize: 18),
                    ),
                    onPressed: (result?.isLoading ?? false)
                        ? null
                        : () {
                            if (_formKey.currentState!.validate()) {
                              runMutation({'content': _controller.text});
                            }
                          },
                    child: (result?.isLoading ?? false)
                        ? const CircularProgressIndicator(color: Colors.white)
                        : const Text('Post'),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}