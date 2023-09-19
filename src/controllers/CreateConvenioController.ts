import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateConvenioController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const convenio = await prismaClient.convenio.create({
            data: {
                name
            }
        })

        return response.json(convenio)
    }
}