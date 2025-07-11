import 'dart:io' show Platform;
import 'package:flutter/foundation.dart' show kIsWeb, kDebugMode;
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

/// Initializes and returns a configured GraphQL client.
///
/// This function automatically selects the correct GraphQL endpoint URL
/// based on the platform and environment mode (debug vs release), as 
/// recommended in Flutter development guides like "Beginning App Development with Flutter".
ValueNotifier<GraphQLClient> getGraphQLClient() {
  String graphqlUrl;

  // Select the correct URL based on environment mode
  if (kDebugMode) {
    // Development mode - use localhost endpoints
    if (kIsWeb) {
      graphqlUrl = 'http://localhost:3000/graphql';
    } else if (Platform.isAndroid) {
      graphqlUrl = 'http://10.0.2.2:3000/graphql'; // Android emulator special IP
    } else {
      graphqlUrl = 'http://localhost:3000/graphql'; // iOS simulator
    }
  } else {
    // Production mode - use production server for all platforms
    graphqlUrl = 'http://138.197.72.196:3000/graphql';
  }

  // Creating the HttpLink with proper headers is crucial for reliable communication.
  final HttpLink httpLink = HttpLink(
    graphqlUrl,
    defaultHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  );

  return ValueNotifier(
    GraphQLClient(
      link: httpLink,
      cache: GraphQLCache(store: HiveStore()),
    ),
  );
}