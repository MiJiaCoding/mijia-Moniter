const mongoose = require('mongoose');

const userActionSchema = new mongoose.Schema(
  {
    appId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    actionType: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      default: '',
    },
    createTime: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: String,
      required: true,
    },
    ua: {
      type: String,
      required: true,
    }
  }
);

module.exports = mongoose.model('UserAction', userActionSchema);
