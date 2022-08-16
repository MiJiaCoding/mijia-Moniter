const mongoose = require('mongoose');

const userLog = new mongoose.Schema({
  appId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  ua: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('userlogs', userLog);
