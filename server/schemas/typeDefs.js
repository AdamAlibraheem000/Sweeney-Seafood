const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    comments: [Comment]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Comment {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    replyCount: Int
    replies: [Reply]
  }

  type Reply {
    _id: ID
    replyBody: String
    createdAt: String
    username: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
  }
`;
// export the typeDefs
module.exports = typeDefs;
