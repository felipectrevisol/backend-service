import express from "express";
import PhoneNumber from "./PhoneNumber.js";

const router = express.Router();
{
    router.get("/phone/all", async (request, response) => {
        response.send(await PhoneNumber.findAll());
    });

    router.get("/phone/:number", async (request, response) => {
        const number = request.params.number.toString();
        response.send(await PhoneNumber.findByPk(number));
    });
}

export default router;