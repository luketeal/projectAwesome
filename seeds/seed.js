const seedCars = require('./carSeeds');
const seedRaces = require('./raceSeeds');
const seedUsers = require('./user-seeds');
const seedEntries = require('./entrySeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- Users SEEDED -----\n');

  await seedCars();
  console.log('\n----- Cars SEEDED -----\n');

  await seedRaces();
  console.log('\n----- Races SEEDED -----\n');

  await seedEntries();
  console.log('\n----- Entries SEEDED -----\n');

  process.exit(0);
};

seedAll();
