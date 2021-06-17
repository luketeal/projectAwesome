const { Car } = require('../models');

const carData = [
  {
    make: "Subaru",
    model: "BRZ",
    horsepower: "300",
    topSpeed: "120",
    acceleration: "1.6",
    user_id: "1"
  },
  {
    make: "BMW",
    model: "E30",
    horsepower: "200",
    topSpeed: "130",
    acceleration: "2.0",
    user_id: "2"
  },
  {
    make: "Volvo",
    model: "740",
    horsepower: "230",
    topSpeed: "100",
    acceleration: "3.8",
    user_id: "3"
  },
  {
    make: "Volkswagon",
    model: "Gulf",
    horsepower: "250",
    topSpeed: "115",
    acceleration: "3.0",
    user_id: "4"
  },
  {
    make: "Honda",
    model: "Civic",
    horsepower: "200",
    topSpeed: "105",
    acceleration: "2.6",
    user_id: "5"
  },
  {
    make: "Subaru",
    model: "Forester",
    horsepower: "215",
    topSpeed: "120",
    acceleration: "2.7",
    user_id: "1"
  },
  {
    make: "Nissan",
    model: "240sx",
    horsepower: "230",
    topSpeed: "125",
    acceleration: "2.9",
    user_id: "2"
  },
  {
    make: "Saab",
    model: "900",
    horsepower: "236",
    topSpeed: "122",
    acceleration: "4.0",
    user_id: "3"
  },
  {
    make: "Mazda",
    model: "3",
    horsepower: "135",
    topSpeed: "112",
    acceleration: "2.2",
    user_id: "4"
  },
  {
    make: "Ford",
    model: "Mustang V6",
    horsepower: "350",
    topSpeed: "145",
    acceleration: "1",
    user_id: "5"
  },
  {
    make: "Tesla",
    model: "Model S",
    horsepower: "250",
    topSpeed: "145",
    acceleration: "1",
    user_id: "1"
  },

];

const seedCars = () => Car.bulkCreate(carData);

module.exports = seedCars;