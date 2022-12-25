const mongoose = require('mongoose');

const lineSchema = new mongoose.Schema(
  {
    points: {
      type: [[Number]],
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    lineWidth: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Line', lineSchema);