import { Sequelize } from 'sequelize';
import Contact from "./ContactList/Contact.js";
import PhoneNumber from "./ContactList/PhoneNumber.js";
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/postgres', {
    logging: process.env.SEQUENCE_LOGGING
});

const openDatabaseConnection = async () => {
    await sequelize.authenticate();
    {
        Contact.hasMany(PhoneNumber);
        PhoneNumber.belongsTo(Contact);
    }

    await sequelize.sync({ force: false });

    console.log("Database Connection Authenticated.");
};

export { sequelize, openDatabaseConnection };