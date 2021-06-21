const { Race } = require('../models');

const raceData = [
  {
    title: "Lee USA Speedway",
    location_town: "Lee",
    location_state: "NH",
    owner_id: "1",
    track_image: "https://image.freepik.com/free-vector/suzuka-circuit-motorsport-autosport-japan-grand-prix-race-track_97886-5398.jpg"
  },
  {
    title: "New Hampshire Motor Speedway",
    location_town: "Loudon",
    location_state: "NH",
    owner_id: "2",
    track_image: "https://image.freepik.com/free-vector/suzuka-circuit-motorsport-autosport-japan-grand-prix-race-track_97886-5398.jpg"
  },
  {
    title: "New England Dragway",
    location_town: "Epping",
    location_state: "NH",
    track_image: "https://image.freepik.com/free-vector/suzuka-circuit-motorsport-autosport-japan-grand-prix-race-track_97886-5398.jpg"
  },
  {
    title: "Star Speedway",
    location_town: "Epping",
    location_state: "NH",
    owner_id: "4",
    track_image: "https://image.freepik.com/free-vector/suzuka-circuit-motorsport-autosport-japan-grand-prix-race-track_97886-5398.jpg"
  },
  {
    title: "Hillside Raceway",
    location_town: "Deerfield",
    location_state: "NH",
    owner_id: "5",
    track_image: "https://image.freepik.com/free-vector/suzuka-circuit-motorsport-autosport-japan-grand-prix-race-track_97886-5398.jpg"
  },
];

const seedRaces = () => Race.bulkCreate(raceData);

module.exports = seedRaces;