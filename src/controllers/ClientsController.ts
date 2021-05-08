import { Request, Response} from 'express'
import { ClientsServices } from '../services/ClientsServices'

class ClientsController {

    async create(request: Request, response: Response) {
        const { cliente, telefone, email } = request.body
        const clientsServices = new ClientsServices()
        const clients = await clientsServices.create({ cliente, telefone, email })
        return response.json(clients)
    }

}

export { ClientsController }