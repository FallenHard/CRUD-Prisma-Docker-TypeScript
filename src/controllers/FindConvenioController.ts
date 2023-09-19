import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindConvenioController {
    async handle(request: Request, response: Response) {
        const { name } = request.params;

        const findConvenio = await prismaClient.convenio.findFirst({
            where: {
                name
            }
        })


        return response.json(findConvenio)
    }
}