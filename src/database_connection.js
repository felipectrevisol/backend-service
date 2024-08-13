import { Sequelize } from 'sequelize';
import Contact from "./ContactList/Contact.js";
import PhoneNumber from "./ContactList/PhoneNumber.js";
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/postgres');

const openDatabaseConnection = async () => {
    await sequelize.authenticate();
    {
        Contact.hasMany(PhoneNumber);
        PhoneNumber.belongsTo(Contact);
    }

    await sequelize.sync({ force: true });

    console.log("Database Connection Authenticated.");
};

export { sequelize, openDatabaseConnection };