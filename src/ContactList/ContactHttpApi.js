import express from "express";
import Contact from "./Contact.js";
import PhoneNumber from "./PhoneNumber.js";

const router = express.Router();
{
    router.get("/list", async (request, response) => {
        response.send(await Contact.findAll({
            include: PhoneNumber
        }));
    });

    router.get("/:id", async (request, response) => {
        const id = parseInt(request.params.id);
        response.send(await Contact.findByPk(id, {
            include: PhoneNumber
        }));
    });

    router.get("/:id/with/phone/:number", async (request, response) => {
        const identifier = parseInt(request.params.id);
        const phoneNumber = request.params.number.toString();

        response.send(await Contact.findOne({
            where: { id: identifier },
            include:[
                {
                    required: true,
                    model: PhoneNumber,
                    where: { number: phoneNumber }
                }
            ]
        }));
    });
}

export default router;