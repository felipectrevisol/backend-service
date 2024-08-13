'use strict';

const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('phone_numbers',
        {
          id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
          },
          ContactId: {
            allowNull: false,
            type: DataTypes.INTEGER,
          },
          number: {
            allowNull: false,
            primaryKey: true,
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

    await queryInterface.addConstraint("phone_numbers",
        {
          type: "foreign key",
          fields: ["ContactId"],
          name: "fk_contacts",

          references: {
             table: "contacts",
             field: "id",
          },

          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
        }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('phone_numbers');
  }
};