import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindAgendamentoController {
    async handle(request: Request, response: Response) {
        const { name } = request.params;

        const agendamentoFind = await prismaClient.agendamento.findFirst({
            where: {
                name
            }
        })

        return response.json(agendamentoFind)
    }
}