'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrower extends Model {
    static associate(models) {
      Borrower.hasMany(models.BorrowRecord, {
        foreignKey: 'borrower_id',
        as: 'borrow_records',
      });
    }
  }
  Borrower.init({
    name: DataTypes.STRING,
    membership_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Borrower',
    timestamps: false
  });
  return Borrower;
};