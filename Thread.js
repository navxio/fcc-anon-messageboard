const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
  board: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
  reported: {
    type: Boolean,
    required: true,
    default: false,
  },
  delete_password: {
    type: String,
    required: true,
  },
  replies: [{
    text: {
      type: String,
      required: true,
    },
    created_on: {
      type: Date,
      default: Date.now,
    },
    delete_password: {
      type: String,
      required: true,
    },
    reported: {
      type: Boolean,
      default: false,
    },
  }],
}, {
  timestamps: {
    createdAt: 'created_on',
    updatedAt: 'bumped_on',
  },
});

module.exports = mongoose.model('Thread', threadSchema);
