import 'dotenv/config'
import express from 'express';
import contactHttpApi from './src/ContactList/ContactHttpApi.js';
import { openDatabaseConnection } from "./src/database_connection.js";

(async () => await openDatabaseConnection())();

const app = express();
{
    app.use(express.json());
    app.use("/contact", contactHttpApi);

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server running on port ${process.env.SERVER_PORT}`);
    });
}