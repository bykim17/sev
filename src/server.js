import { ApolloServer, gql } from "apollo-server-express";
//import typeDefs from './schema/typeDefs'
import resolvers from "./resolvers/resolvers";
import fs from "fs";
import path from "path";
const typeDefs = fs
  .readFileSync(path.join(__dirname, "./schema", "schema.graphql"), "utf8")
  .toString()
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
export default server;
