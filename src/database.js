import {Sequelize} from 'sequelize';
import Contact from "./Contacts/Contact.js";
import PhoneNumber from "./Contacts/PhoneNumber.js";

const sequelize = new Sequelize(process.env.DATABASE_URL,
    {logging: false}
);

const openDatabaseConnection = async () => {
    await sequelize.authenticate();
    {
        Contact.hasMany(PhoneNumber);
        PhoneNumber.belongsTo(Contact);
        await sequelize.sync({force: false});
    }

    console.log("Database Connection Authenticated.");
};

export {sequelize, openDatabaseConnection};