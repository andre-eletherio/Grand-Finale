import "reflect-metadata"
import { Request, Response } from "express"
import { IController } from "../../../../../shared/infra/protocols/IController"
import { AlterNameUseCase } from "../../../useCases/AlterNameUseCase"

export class AlterNameController implements IController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id, name} = request.body

        const alterNameUseCase = new AlterNameUseCase()

        const ok = await alterNameUseCase.execute({id, name})

        return response.status(200).send(ok)
    }
}