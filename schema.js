
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);

const loadedResolvers = loadFilesSync(path.join(__dirname, './**/*.resolvers.js'));

const typeDefs = mergeTypeDefs(loadedTypes);

const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;