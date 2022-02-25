const { Schema, model } = require('mongoose');
// Game
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

const Game = model('Game', schema);

module.exports = Game;