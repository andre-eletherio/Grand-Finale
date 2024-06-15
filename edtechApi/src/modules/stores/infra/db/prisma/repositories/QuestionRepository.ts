import { Question, User } from '@prisma/client'
import { prisma } from '../../../../../../shared/infra/db/prisma/client'
import { IQuestionRepository } from '../../../../repositories/IQuestionRepository'

export interface IRegisterUserDTO {
  email: string,
  password: string
}

export class QuestionRepository implements IQuestionRepository {
  async getQuestion(name: string): Promise<Question[]> {
    const questions = await prisma.question.findMany({
      where: {
        name
      }
    })

    return questions
  }
}