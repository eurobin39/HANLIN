// schema.js
import { loadFiles } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function getSchema() {
    // 파일 로드
    const loadedTypes = await loadFiles(path.join(__dirname, '**/*.typeDefs.js'));
    const loadedResolvers = await loadFiles(path.join(__dirname, '**/*.resolvers.js'));
  
    // 로드된 파일 로깅
    console.log(loadedTypes);
    console.log(loadedResolvers);
  
    // 스키마 생성
    const typeDefs = mergeTypeDefs(loadedTypes);
    const resolvers = mergeResolvers(loadedResolvers);
  
    return makeExecutableSchema({ typeDefs, resolvers });
  }
  


export default getSchema;
