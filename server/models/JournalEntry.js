const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const journalEntrySchema = new Schema(
  {
    jounralText: {
      type: String,
      required: 'You need to leave an entry!',
      minlength: 1
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
      }
  }
);


const JournalEntry = model('JournalEntry', journalEntrySchema);

module.exports = JournalEntry;
