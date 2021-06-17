const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Entry extends Model {}

Entry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    race_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'race',
          key: 'id',
        },
      },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    car_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'car',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'entry',
  }
);

module.exports = Entry;