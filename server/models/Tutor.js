const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    enum: ["javascript", "css", "apis", "mern", "sql", "react"],
  },
  description: {
    type: String,
    required: true
  }
});

const Tutor = model('Tutor', schema);

module.exports = Tutor;
