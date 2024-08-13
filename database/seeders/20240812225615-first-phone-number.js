'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('phone_numbers',
        [
          {
            id: 1,
            number: 5548974112300,
            createdAt: new Date(),
            updatedAt: new Date(),
            ContactId:1
          }
          ,{
            id: 2,
            number: 5547974112300,
            createdAt: new Date(),
            updatedAt: new Date(),
            ContactId:2
          }
        ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phone_numbers', null, {});
  }
};