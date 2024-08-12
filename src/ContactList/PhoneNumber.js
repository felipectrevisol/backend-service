import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../database_connection.js";

class PhoneNumber extends Model {}

PhoneNumber.init(
    {
        id: {
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        number: {
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
        modelName: 'PhoneNumber',
        tableName: 'phone_numbers',
    }
);

export default PhoneNumber;