import dotenv from 'dotenv';
dotenv.config();

import { ApolloServer } from 'apollo-server';
import { typeDefs } from './User/user.typedefs.js';

import { resolvers } from './User/user.resolvers.js';


const PORT = process.env.PORT;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server
  .listen(PORT)
  .then(() =>
    console.log(`🚀Server is running on http://localhost:${PORT} ✅`)
  );