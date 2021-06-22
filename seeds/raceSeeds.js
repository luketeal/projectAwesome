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
    track_image: "https://image.freepik.com/free-vector/istanbul-circuit-motorsport-autosport-turkey-grand-prix-race-track_97886-5379.jpg"
  },
  {
    title: "New England Dragway",
    location_town: "Epping",
    location_state: "NH",
    owner_id: "3",
    track_image: "https://image.freepik.com/free-vector/valencia-circuit-motorsport-autosport-spain-grand-prix-race-track_97886-5399.jpg"
  },
  {
    title: "Star Speedway",
    location_town: "Epping",
    location_state: "NH",
    owner_id: "4",
    track_image: "https://image.freepik.com/free-vector/donington-park-circuit-motorsport-autosport-britain-grand-prix-race-track_97886-5374.jpg"
  },
  {
    title: "Hillside Raceway",
    location_town: "Deerfield",
    location_state: "NH",
    owner_id: "5",
    track_image: "https://image.freepik.com/free-vector/yas-marina-circuit-motorsport-autosport-abu-dhabi-grand-prix-race-track_97886-5400.jpg"
  },
];

const seedRaces = () => Race.bulkCreate(raceData);

module.exports = seedRaces;