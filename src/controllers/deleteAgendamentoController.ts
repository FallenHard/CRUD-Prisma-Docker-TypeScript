import { Response, Request } from "express";
import { prismaClient } from "../database/prismaClient";

export class deleteAgendamentoController {
    async handle(request: Request, response: Response) {
        try {
            const { name } = request.params;
            const { id_servico, id_convenio, email, telephone } = request.body;

            const deleteName = await prismaClient.agendamento.findUnique({ where: {name}})
            
            if (!deleteName) {
                return response.json({
                    error: true,
                    message: 'Error: nao foi encontrado'
                })
            }



            const deleteUpdate = await prismaClient.agendamento.delete({
                where: {
                    name
                },
            })

            return response.json(deleteUpdate)

        } catch (message) {
            return response.json({ error: message})
        }
        }
    }