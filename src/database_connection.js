import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/postgres');

const openDatabaseConnection = async () => {
    await sequelize.authenticate();
    console.log("Database Connection Authenticated.");
};

export { sequelize, openDatabaseConnection };