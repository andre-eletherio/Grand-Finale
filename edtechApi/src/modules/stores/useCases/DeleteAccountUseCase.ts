import { QuestionRepository } from "../infra/db/prisma/repositories/QuestionRepository";
import { UserRepository } from "../infra/db/prisma/repositories/UserRepository";

export class DeleteAccountUseCase {

  async execute({id}: {id: number}) {

    const userRepository = new UserRepository()

    const user = await userRepository.deleteAccount(id)

    return user
  }
}