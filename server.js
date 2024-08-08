import Contact from "./src/ContactList/Contact.js";
import { openDatabaseConnection } from "./src/database_connection.js";

(async () => {
    await openDatabaseConnection();
    console.log("Server started!");
    {
        await Contact.create({
            name: "Um nome Qualquer",
            lastName: "Um Sobrenome"
        });

        console.log("Contact created successfully.");
    }
})();