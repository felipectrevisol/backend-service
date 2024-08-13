import 'dotenv/config'
import express from 'express';
import contactHttpApi from './src/Contacts/ContactHttpApi.js';
import { openDatabaseConnection } from "./src/database.js";
import phoneNumberHttpApi from './src/Contacts/PhoneNumberHttpApi.js';

(async () => await openDatabaseConnection())();

const app = express();
{
    app.use(express.json());
    app.use("/v1/contact", contactHttpApi);
    app.use("/v1/phone", phoneNumberHttpApi);

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server running on port ${process.env.SERVER_PORT}`);
    });
}