const User = require('./Users');
const Race = require('./Races');
const Car = require('./Cars');

User.hasMany(Car, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
  
Car.belongsTo(User, {
    foreignKey: 'user_id'
});

Race.belongsToMany(Car, {
    through: 'event',
});

Car.belongsToMany(Race, {
    through: 'event'
});

Race.belongsToMany(User, {
    through: 'event',
});

User.belongsToMany(Race, {
    through: 'event'
});

module.exports = { User, Race, Car };
