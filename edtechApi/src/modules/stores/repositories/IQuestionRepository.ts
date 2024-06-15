import { Question } from "@prisma/client";

export interface IQuestionRepository {
    getQuestion(name: string): Promise<Question[]>
}
