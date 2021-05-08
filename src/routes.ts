import { Router } from 'express'

import { ClientsController } from './controllers/ClientsController'

const routes = Router();

const clientsController = new ClientsController()

routes.post('/clients', clientsController.create)

export { routes }

//rotas (/clients) - get/post/put/delete
// controller - responsabilidade de pegar as informações da rota
// services = responsabilidade da regra de negocio da aplicação e devolver
//            para o controller