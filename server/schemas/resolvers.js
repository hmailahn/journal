const { JournalEntry, User } = require("../models");

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
};

module.exports = resolvers;
