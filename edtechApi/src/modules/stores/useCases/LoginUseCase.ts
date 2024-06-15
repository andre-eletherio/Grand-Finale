import { AppError } from "../../../shared/errors/AppError";
import { UserRepository } from "../infra/db/prisma/repositories/UserRepository";

export interface IUser {
  email: string,
  password: string
}

export class LoginUseCase {

  async execute({email, password}: IUser) {

    const userRepository = new UserRepository()

    const user = await userRepository.getUserByEmail(email)

    if (!user) {
      throw new AppError({message: 'Erro ao logar', title: 'Usuário não existe'}, 404)
    }

    if (user.password !== password) {
      throw new AppError({message: 'Senha errada', title: 'Senha errada'}, 400)
    }

    return user
  }
}