const db = require('../config/connection');
const userSeeds = require('./userSeeds.json');
const tutorSeeds = require('./tutorSeeds.json');
const Tutor = require('../models/tutor');
const User = require('../models/user');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Tutor.deleteMany({});

    await User.create(userSeeds);
    await Tutor.create(tutorSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
