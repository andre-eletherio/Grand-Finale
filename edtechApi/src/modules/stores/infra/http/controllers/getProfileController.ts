import "reflect-metadata"
import { Request, Response } from "express"
import { IController } from "../../../../../shared/infra/protocols/IController"
import { AlterNameUseCase } from "../../../useCases/AlterNameUseCase"
import { DeleteAccountUseCase } from "../../../useCases/DeleteAccountUseCase"
import { AppError } from "../../../../../shared/errors/AppError"
import { GetProfileUseCase } from "../../../useCases/GetProfileUseCase"

export class GetProfileController implements IController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params

        if (!id) {
            throw new AppError({message: 'Erro ao deletar user', title: 'Erro'}, 400)
        }

        const getProfileUseCase = new GetProfileUseCase()

        const ok = await getProfileUseCase.execute({id: +id})


        return response.status(200).send(ok)
    }
}