// typedefs.js

// 여기에 필요한 typedefs를 정의합니다.
const typeDefs = `
  type Query {
    seeProfile(username: String!): User
  }
  type Mutation {
    reateAccount(
        firstName: String!
        lastName: String
        username: String!
        email: String!
        password: String!
      ): User
  }
  type User {
    id: String!
    firstName: String!
    lastName: String
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }
`;

export { typeDefs };
