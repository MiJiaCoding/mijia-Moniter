const mongoose = require('mongoose');

const errorLogSchema = new mongoose.Schema(
  {
    appId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    errorType: {
      type: String,
      required: true,
    },
    errMsg: {
      type: String,
      default: '',
    },
    col: {
      type: Number,
      required: false,
    },
    row: {
      type: Number,
      required: false,
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

module.exports = mongoose.model('errorlog', errorLogSchema);
