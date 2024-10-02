const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
  }

  type User {
    id: String!
    name: String!
    email: String!
    userName: String!
              birthday: String!
              gender: String!
              role: String!
              actions: String!
  }

  type Query {
    users: [User]
  }

  type Group {
    nameGroup: String!
    id: String!
    actionsGroup: String!
  }

  type Query {
    groups: [Group]
  }
`;

module.exports = typeDefs;