import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateAgendamentoController {
    async handle(request: Request, response: Response) {
        const { id_servico, id_convenio, name, email, telephone } = request.body

        const agendamento = await prismaClient.agendamento.create({
            data: {
                id_servico,
                id_convenio,
                name,
                email,
                telephone
            }
        })

        return response.json(agendamento)

    }
}