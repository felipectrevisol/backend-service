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
        response.send(await Contact.findByPk(id));
    });
}

export default router;