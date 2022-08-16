const mongoose = require('mongoose');

const pvSchema = new mongoose.Schema(
  {
    appId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    stayTime: {
      type: Number,
      required: true,
    },
    createTime: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: String,
      required: false,
    },
    ua: {
      type: String,
      required: true,
    }
  }
);

module.exports = mongoose.model('pv', pvSchema);
