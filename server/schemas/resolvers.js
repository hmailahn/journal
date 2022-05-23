const { JournalEntry, User } = require("../models");
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    journalEntries: async (parent, { username }) => {
      const params = username ? { username } : {};
      return JournalEntry.find().sort({ createdAt: -1 });
    },

    journalEntry: async (parent, { _id }) => {
      return JournalEntry.findOne({ _id });
    },
    // get all users
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("journalEntries");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("journalEntries");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
        const user = await User.create(args);

        return user;
    },
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        return user;
      }
  }

};

module.exports = resolvers;
