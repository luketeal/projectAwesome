const { Entry } = require('../models');

const entryData = [
  {
    race_id: "1",
    user_id: "1",
    car_id: "1",
  },
  {
    race_id: "1",
    user_id: "3",
    car_id: "3",
  },
  {
    race_id: "1",
    user_id: "4",
    car_id: "9",
  },
  {
    race_id: "1",
    user_id: "5",
    car_id: "10",
  },
  {
    race_id: "2",
    user_id: "2",
    car_id: "7",
  },
  {
    race_id: "2",
    user_id: "4",
    car_id: "4",
  },
  {
    race_id: "2",
    user_id: "5",
    car_id: "5",
  },
  {
    race_id: "3",
    user_id: "1",
    car_id: "11",
  },
  {
    race_id: "3",
    user_id: "3",
    car_id: "8",
  },
  {
    race_id: "3",
    user_id: "2",
    car_id: "2",
  },
];

const seedEntries = () => Entry.bulkCreate(entryData);

module.exports = seedEntries;