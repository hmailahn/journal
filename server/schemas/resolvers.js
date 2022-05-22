const { JournalEntry } = require("../models");

const resolvers = {
    Query: {
        journalEntries: async () => {
            return JournalEntry.find().sort({ createdAt: -1 });
          }
    }
  };
  
  module.exports = resolvers;