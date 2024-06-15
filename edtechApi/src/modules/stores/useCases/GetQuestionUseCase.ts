import { QuestionRepository } from "../infra/db/prisma/repositories/QuestionRepository";

export class GetQuestionUseCase {

  async execute({name}: {name: string}) {

    const questionRepository = new QuestionRepository()

    const questions = await questionRepository.getQuestion(name)

    const randomNumber = Math.floor(Math.random() * questions.length);

    return questions[randomNumber]
  }
}