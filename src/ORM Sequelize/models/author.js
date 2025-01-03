'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      Author.hasMany(models.Book, {
        foreignKey: 'author_id',
        as: 'books'
      });
    }
  }
  Author.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
    timestamps: false
  });
  return Author;
};

