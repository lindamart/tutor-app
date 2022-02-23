const { Schema, model } = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    enum: ["javascript", "css", "apis", "mern", "sql", "react"],
  },
  link: {
    type: String,
    required: true
  }
});

const Video = model('Video', schema);

module.exports = Video;