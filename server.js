import dotenv from 'dotenv';
dotenv.config();

import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typedefs.js';

// Assuming resolvers are correctly defined and imported
import resolvers from './resolvers.js';

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
