import "reflect-metadata"
import { Request, Response } from "express"
import { IController } from "../../../../../shared/infra/protocols/IController"
import { GetQuestionUseCase } from "../../../useCases/GetQuestionUseCase"

export class GetQuestionController implements IController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {name} = request.params

        const getQuestionUseCase = new GetQuestionUseCase()

        const ok = await getQuestionUseCase.execute({name: name as string})

        return response.status(200).send(ok)
    }
}