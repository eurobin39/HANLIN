import dotenv from 'dotenv';
dotenv.config();

// server.js
import { ApolloServer } from 'apollo-server';
import getSchema from './schema.js';
import { getUser, protectResolver } from './User/users.utils.js';

async function startServer() {

  const schema = await getSchema();

  const server = new ApolloServer({ 
    
    schema,
    context: async({req}) => {
    return{
      loggedInUser: await getUser(req.headers.token),
      protectResolver,
    };
    },
  
  });
  const PORT = process.env.PORT;
  
server
  .listen(PORT)
  .then(() =>
    console.log(`🚀Server is running on http://localhost:${PORT} ✅`)
  );
}

  startServer();