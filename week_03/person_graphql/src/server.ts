// index.ts
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema';

const PORT = process.env.PORT || 4000;

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
