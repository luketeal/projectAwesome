const { Race } = require('../models');

const raceData = [
  {
    title: "Lee USA Speedway",
    location_town: "Lee",
    location_state: "NH",
    owner_id: "1"
  },
  {
    title: "New Hampshire Motor Speedway",
    location_town: "Loudon",
    location_state: "NH",
    owner_id: "2"
  },
  {
    title: "New England Dragway",
    location_town: "Epping",
    location_state: "NH",
    owner_id: "3"
  },
  {
    title: "Star Speedway",
    location_town: "Epping",
    location_state: "NH",
    owner_id: "4"
  },
  {
    title: "Hillside Raceway",
    location_town: "Deerfield",
    location_state: "NH",
    owner_id: "5"
  },
];

const seedRaces = () => Race.bulkCreate(raceData);

module.exports = seedRaces;