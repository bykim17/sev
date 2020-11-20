import { gql } from "apollo-server-express";
//fack database
const user = [
  {
    id: "1",
    name: "สมชาย",
    username: "Somchai",
    password: "123456",
    email: "somchaiinwza007@outlook.com",
  },
  {
    id: "2",
    name: "สมหมาย",
    username: "Sommai",
    password: "123456",
    email: "sommaiinwza007@outlook.com",
  },
  {
    id: "3",
    name: "สมปอง",
    username: "Sompong",
    password: "123456",
    email: "somponginwza007@outlook.com",
  },
  {
    id: "4",
    name: "สมรักษ์",
    username: "Somrak",
    password: "123456",
    email: "somrakinwza007@outlook.com",
  },
 
];
export const resolvers = {
  Query: {
    user: (parent, args, context, info) => {return user.filter((user) => user.id.toString() === args.id)[0]},
    users: (parent, args, context, info) => {return user},
  },
};
export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    password: String!
    email: String!
  }
  type Query {
    user(id: ID!): User
    users: [User]!
  }
`;
