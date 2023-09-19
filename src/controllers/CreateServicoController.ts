import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateServicoController {
    async handle(request: Request, response: Response) {
        const { name } = request.body

        const servico = await prismaClient.servico.create({
            data: {
                name
            }
        })


        return response.json(servico)
    }
}