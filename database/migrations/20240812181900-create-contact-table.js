'use strict';

const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('contacts',
        {
          id: {
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
          },
          name: {
            allowNull: true,
            type: DataTypes.STRING,
          },
          lastName: {
            allowNull: true,
            type: DataTypes.STRING,
          },
          createdAt: {
            allowNull: true,
            type: DataTypes.TIME,
          },
          updatedAt: {
            allowNull: true,
            type: DataTypes.TIME,
          }
        }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('contacts');
  }
};