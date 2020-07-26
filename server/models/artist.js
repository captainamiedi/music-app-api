'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.belongsTo(models.Genres, {
        foreignKey: 'genreId',
        onDelete: 'CASCADE'
      })
    }
  };
  Artist.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    release_date: DataTypes.DATE,
    song: DataTypes.STRING,
    image: DataTypes.STRING,
    rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};