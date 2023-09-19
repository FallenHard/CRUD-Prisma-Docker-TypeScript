import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindServicoController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const findServico = await prismaClient.servico.findFirst({
            where: {
                name
            }
        })

        return response.json(findServico)
    }
} 