'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Authors', [
      { name: 'J.K. Rowling', country: 'UK' },
      { name: 'George R.R. Martin', country: 'USA'},
      { name: 'J.R.R. Tolkien', country: 'UK'},
      { name: 'Isaac Asimov', country: 'Russia'},
      { name: 'Arthur C. Clarke', country: 'UK'},
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {});
  }
};
