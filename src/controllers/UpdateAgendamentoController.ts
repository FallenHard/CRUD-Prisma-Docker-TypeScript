import { Response, Request } from "express";
import { prismaClient } from "../database/prismaClient";

export class updateAgendamentoController {
    async handle(request: Request, response: Response) {
        try {
            const { name } = request.params;
            const { id_servico, id_convenio, email, telephone } = request.body;

            const update = await prismaClient.agendamento.findUnique({ where: {name}})
            
            if (!update) {
                return response.json({
                    error: true,
                    message: 'Error: nao foi encontrado'
                })
            }



            const agendamentoUpdate = await prismaClient.agendamento.update({
                where: {
                    name
                },
                data: {
                    id_servico,
                    id_convenio,
                    name,
                    email,
                    telephone
                }
            })

            return response.json(agendamentoUpdate)

        } catch (message) {
            return response.json({ error: message})
        }
        }
    }