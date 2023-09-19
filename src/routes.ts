import { Router } from "express";
import { CreateAgendamentoController } from "./controllers/CreateAgendamentoController";
import { CreateServicoController } from "./controllers/CreateServicoController";
import { CreateConvenioController } from "./controllers/CreateConvenioController";
import { FindAgendamentoController } from "./controllers/FindAgendamentoController";
import { FindConvenioController } from "./controllers/FindConvenioController";
import { FindServicoController } from "./controllers/FindServicoController";
import { FindAllAgendamentoController } from "./controllers/FindAllAgendamentoController";
import { updateAgendamentoController } from "./controllers/UpdateAgendamentoController";
import { deleteAgendamentoController } from "./controllers/deleteAgendamentoController";


const router = Router();

//POST
const createAgendamento = new CreateAgendamentoController();
const createServico = new CreateServicoController();
const createConvenio = new CreateConvenioController();

//GET
const findAgendamento = new FindAgendamentoController();
const findConvenio = new FindConvenioController();
const findServico = new FindServicoController();
const findAllAgendamento = new FindAllAgendamentoController();

//PUT
const updateAgendamento = new updateAgendamentoController();

//DELETE
const deleteAgendamento = new deleteAgendamentoController();

//ROTAS POST
router.post("/agendamento", createAgendamento.handle);
router.post("/servico", createServico.handle);
router.post("/convenio", createConvenio.handle);

//ROTAS GET
router.get("/agendamento/:name", findAgendamento.handle);
router.get("/convenio/:name", findConvenio.handle);
router.get("/servico/:name", findServico.handle);
router.get("/agendamento", findAllAgendamento.handle);

//ROTAS PUT
router.put("/agendamento/:name", updateAgendamento.handle);

//ROTA DELETE
router.delete("/agendamento/:name", deleteAgendamento.handle);

export { router };