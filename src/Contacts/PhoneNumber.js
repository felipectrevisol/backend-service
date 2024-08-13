import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../database.js";

class PhoneNumber extends Model {}

PhoneNumber.init(
    {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        number: {
            allowNull: true,
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
    },
    {
        sequelize,
        modelName: 'PhoneNumber',
        tableName: 'phone_numbers',
        freezeTableName: true
    }
);

export default PhoneNumber;