import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindAllAgendamentoController {
    async handle(request: Request, response: Response) {
        const { id_servico, id_convenio, name, email, telephone, date } = request.body

        const findAllAgendamento = await prismaClient.agendamento.findMany({
            where: {
                id_convenio,
                id_servico,
                name,
                email,
                telephone,
                date
            }
        })

        return response.json(findAllAgendamento)
    }
}