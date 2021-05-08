import { getCustomRepository } from 'typeorm'
import { ClientsRepository } from '../repositories/ClientsRepository'

interface IClientsCreate {
    cliente: string;
    telefone: string;
    email: string;
}

class ClientsServices {

    async create({cliente, telefone, email}: IClientsCreate) {

        const clientsRepository = getCustomRepository(ClientsRepository)

        const clients = clientsRepository.create({
            cliente,
            telefone,
            email
        })

        await clientsRepository.save(clients)

        return clients

    }
}

export { ClientsServices }