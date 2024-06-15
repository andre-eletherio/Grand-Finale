import { AppError } from "../../../shared/errors/AppError";
import { UserRepository } from "../infra/db/prisma/repositories/UserRepository";

export class RegisterUserUseCase {

  async execute({name, email, password}: {name: string, email: string, password: string}) {
    if (!name || !email || !password) {
      throw new AppError({message: 'Erro ao cadastrar user', title: 'Erro'}, 400)
    }

    const userRepository = new UserRepository()
    
    const userAlreadyRegistered = await userRepository.getUserByEmail(email)

    if (userAlreadyRegistered !== null) {
      throw new AppError({message: 'Usuário já cadastrado', title: 'Erro'}, 400)
    }

    const response = await userRepository.register({
      name,
      email,
      password
    })

    return response
  }
}