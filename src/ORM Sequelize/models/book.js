'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Author, {
        foreignKey: 'author_id',
        as: 'author',
      });
      Book.hasMany(models.BorrowRecord, {
        foreignKey: 'book_id',
        as: 'borrow_records',
      });
    }
  }
  Book.init({
    title: DataTypes.STRING,
    author_id: DataTypes.INTEGER,
    published_year: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Book',
    timestamps: false
  });
  return Book;
};