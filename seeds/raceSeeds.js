const { Race } = require('../models');

const raceData = [
  {
    title: "Lee USA Speedway",
    location_town: "Lee",
    location_state: "NH",
  },
  {
    title: "New Hampshire Motor Speedway",
    location_town: "Loudon",
    location_state: "NH",
  },
  {
    title: "New England Dragway",
    location_town: "Epping",
    location_state: "NH",
  },
  {
    title: "Star Speedway",
    location_town: "Epping",
    location_state: "NH",
  },
  {
    title: "Hillside Raceway",
    location_town: "Deerfield",
    location_state: "NH",
  },
];

const seedRaces = () => Race.bulkCreate(raceData);

module.exports = seedRaces;