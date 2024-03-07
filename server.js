import dotenv from 'dotenv';
dotenv.config();

// server.js
import { ApolloServer } from 'apollo-server';
import getSchema from './schema.js';

async function startServer() {
  // getSchema 함수를 호출하여 스키마 객체를 비동기적으로 받아옵니다.
  const schema = await getSchema();

  // 받아온 스키마 객체를 사용하여 ApolloServer 인스턴스를 생성합니다.
  const server = new ApolloServer({ schema });
  const PORT = process.env.PORT;
  
server
  .listen(PORT)
  .then(() =>
    console.log(`🚀Server is running on http://localhost:${PORT} ✅`)
  );
}

  startServer();