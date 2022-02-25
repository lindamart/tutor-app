const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Tutor {
    _id: ID
    name: String
    subject: String
    description: String
  }

  type Video {
    _id: ID
    title: String
    subject: String
    link: String
  }

  type Game {
    _id: ID
    title: String
    subject: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    tutors:[Tutor]
    videos:[Video]
    games:[Game]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
