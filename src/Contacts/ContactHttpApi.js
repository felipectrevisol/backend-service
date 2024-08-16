import express from "express";
import Contact from "./Contact.js";
import PhoneNumber from "./PhoneNumber.js";
import swaggerUi from "swagger-ui-express";

import path from "node:path";
import YAML from 'yamljs';

const router = express.Router();
{
    const apiDocumentation = YAML.load(path.resolve("src/Contacts", "./docs/contacts.api.yml"));
    {
        router.use('/contact/docs', swaggerUi.serve);
        router.get("/contact/docs", swaggerUi.setup(apiDocumentation, {
            encoding: 'utf8', flag: 'r'
        }));
    }

    router.get("/contact/all", async (request, response) => {
        response.send(await Contact.findAll({
            include: PhoneNumber
        }));
    });

    router.get("/contact/:id", async (request, response) => {
        const id = parseInt(request.params.id);
        response.send(await Contact.findByPk(id, {
            include: PhoneNumber
        }));
    });

    router.get("/contact/:id/with/phone/:number", async (request, response) => {
        const identifier = parseInt(request.params.id);
        const phoneNumber = request.params.number.toString();

        response.send(await Contact.findOne({
            where: {id: identifier},
            include: [
                {
                    required: true,
                    model: PhoneNumber,
                    where: {number: phoneNumber}
                }
            ]
        }));
    });
}

export default router;