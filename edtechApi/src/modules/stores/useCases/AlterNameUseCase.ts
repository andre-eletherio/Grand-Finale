import { QuestionRepository } from "../infra/db/prisma/repositories/QuestionRepository";
import { UserRepository } from "../infra/db/prisma/repositories/UserRepository";

export class AlterNameUseCase {

  async execute({id, name}: {id: number, name: string}) {

    const userRepository = new UserRepository()

    const user = await userRepository.alterName(id, name)

    return user
  }
}