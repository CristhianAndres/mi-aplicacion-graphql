const { users} = require('./data');
const { groups} = require('./dataG');

const resolvers = {
  Query: {
    hello: () => '¡Hola, mundo!',

    users: () => users,

    groups: () => groups,
  },
};

module.exports = resolvers;