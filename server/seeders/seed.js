const db = require('../config/connection');
const userSeeds = require('./userSeeds.json');
const tutorSeeds = require('./tutorSeeds.json');
const Tutor = require('../models/tutor');
const User = require('../models/user');
const videoSeeds = require('./videoSeeds.json');
const Video = require('../models/video');
const gameSeeds = require('./gameSeeds.json');
const Game = require('../models/game');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Tutor.deleteMany({});
    await Video.deleteMany({});
    await Game.deleteMany({});

    await User.create(userSeeds);
    await Tutor.create(tutorSeeds);
    await Video.create(videoSeeds);
    await Game.create(gameSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
