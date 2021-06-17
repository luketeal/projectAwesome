const User = require('./Users');
const Race = require('./Races');
const Car = require('./Cars');
const Entry = require('./Entry');

User.hasMany(Car, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
  
Car.belongsTo(User, {
    foreignKey: 'user_id'
});

Race.belongsToMany(Car, {
      // Define the third table needed to store the foreign keys
  through: {
    model: Entry,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'race_car',
  foreignKey: 'race_id'
});

Car.belongsToMany(Race, {
      // Define the third table needed to store the foreign keys
  through: {
    model: Entry,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'car_race',
  foreignKey: 'car_id'
});

Race.belongsToMany(User, {
      // Define the third table needed to store the foreign keys
  through: {
    model: Entry,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'race_user',
  foreignKey: 'race_id'
});

User.belongsToMany(Race, {
      // Define the third table needed to store the foreign keys
  through: {
    model: Entry,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'user_race',
  foreignKey: 'user_id'
});

module.exports = { User, Race, Car, Entry };
