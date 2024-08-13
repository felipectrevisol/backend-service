import PhoneNumber from './PhoneNumber.js';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../database.js";

class Contact extends Model {}

Contact.init(
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
    },
    {
        sequelize,
        modelName: 'Contact',
        tableName: 'contacts',
        freezeTableName: true
    }
);

export default Contact;