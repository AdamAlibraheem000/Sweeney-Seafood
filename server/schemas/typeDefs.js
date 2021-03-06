const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    comments: [Comment]
  }
  type Comment {
    _id: ID
    commentText: String
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
  type Feature {
    title: String
    description: String
    price: Int
  }
  type Query {
    me: User
    users: [User]
    features: [Feature]
    user(username: String!): User
    comments: [Comment]
    comment(_id: ID!): Comment
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentText: String!): Comment
    addReply(replyId: ID!, replyBody: String!): Comment
    addFeature(title: String!, description: String!, price: Int!): Feature
  }
  type Auth {
    token: ID!
    user: User
  }
`;
// export the typeDefs
module.exports = typeDefs;
