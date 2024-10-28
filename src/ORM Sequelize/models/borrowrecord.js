'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BorrowRecord extends Model {
    static associate(models) {
      BorrowRecord.belongsTo(models.Borrower, {
        foreignKey: 'borrower_id',
        as: 'borrower',
      });
      BorrowRecord.belongsTo(models.Book, {
        foreignKey: 'book_id',
        as: 'book',
      });
    }
  }
  BorrowRecord.init({
    borrower_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    borrow_date: DataTypes.DATE,
    return_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BorrowRecord',
  });
  return BorrowRecord;
};