// resolvers.js
const resolvers = {
    Query: {
      users: () => { /* Fetch all users */ },
      items: () => { /* Fetch all items */ },
      categories: () => { /* Fetch all categories */ },
      user: (_, { id }) => { /* Fetch user by ID */ },
      item: (_, { id }) => { /* Fetch item by ID */ },
    },
    Mutation: {
      createUser: (_, { username, email }) => { /* Create a new user */ },
      createItem: (_, { title, description, categoryId, ownerId }) => { /* Create a new item */ },
    },
  };
  
  export default resolvers;
  