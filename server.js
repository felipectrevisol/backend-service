import express from 'express';
import 'dotenv/config'

import contactHttpApi from './src/Contacts/ContactHttpApi.js';
import phoneNumberHttpApi from './src/Contacts/PhoneNumberHttpApi.js';
import { openDatabaseConnection } from "./src/database.js";

(async () => await openDatabaseConnection())();

const app = express();
{
    app.use(express.json());
    app.use("/v1", contactHttpApi);
    app.use("/v1", phoneNumberHttpApi);

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server running on port ${process.env.SERVER_PORT}`);
    });
}