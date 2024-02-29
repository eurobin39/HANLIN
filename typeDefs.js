// typedefs.js
import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    items: [Item]
  }

  type Item {
    id: ID!
    title: String!
    description: String
    category: Category
    owner: User!
  }

  type Category {
    id: ID!
    name: String!
    items: [Item]
  }

  type Query {
    users: [User]
    items: [Item]
    categories: [Category]
    user(id: ID!): User
    item(id: ID!): Item
  }

  type Mutation {
    createUser(username: String!, email: String!): User
    createItem(title: String!, description: String, categoryId: ID!, ownerId: ID!): Item
  }
`;
