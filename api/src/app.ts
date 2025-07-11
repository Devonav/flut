import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import graphqlSchema from './routes/graphql/schema';
import graphqlResolvers from './routes/graphql/resolvers';
import postRoutes from './routes/v1/post.routes';

const app = express();

// --- Middleware Setup ---
app.use(cors());
app.use(express.json());

// --- Apollo Server Setup ---
const apolloServer = new ApolloServer({
  typeDefs: graphqlSchema,
  resolvers: graphqlResolvers,
});

// We must start Apollo before applying it as middleware
apolloServer.start().then(() => {
  apolloServer.applyMiddleware({ app: app as any, path: '/graphql' });
});

// --- Route Setup ---
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'UP' });
});
app.use('/api/posts', postRoutes);

// --- Final Error Handler ---
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Unhandled Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

export default app;