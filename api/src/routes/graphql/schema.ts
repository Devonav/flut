import { buildSchema } from 'graphql';

// This exports the schema definition.
// The key types here are `RootQuery` and `RootMutation`.
export default buildSchema(`
    type Post {
        _id: ID!
        content: String!
        createdAt: String!
    }

    input PostInput {
        content: String!
    }

    type RootQuery {
        posts: [Post!]!
    }

    type RootMutation {
        createPost(postInput: PostInput!): Post
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);