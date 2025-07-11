import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'core/api/graphql_client.dart'; // Import the new configuration file
import 'features/feed/presentation/screens/feed_screen.dart';

void main() async {
  // This is required for the Hive cache store
  await initHiveForFlutter();

  // Get the configured GraphQL client from our new function
  final ValueNotifier<GraphQLClient> client = getGraphQLClient();

  runApp(
    GraphQLProvider(
      client: client,
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Social App',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const FeedScreen(),
    );
  }
}