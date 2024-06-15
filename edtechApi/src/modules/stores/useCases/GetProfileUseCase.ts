import { QuestionRepository } from "../infra/db/prisma/repositories/QuestionRepository";
import { UserRepository } from "../infra/db/prisma/repositories/UserRepository";

export class GetProfileUseCase {

  async execute({id}: {id: number}) {

    const userRepository = new UserRepository()

    const user = await userRepository.getById(id)

    return user
  }
}