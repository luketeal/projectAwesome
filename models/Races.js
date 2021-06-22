const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Race extends Model {}

Race.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location_town: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location_state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    race_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
      },
    track_image: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'race',
  }
);

module.exports = Race;