import "reflect-metadata"
import { Request, Response } from "express"
import { IController } from "../../../../../shared/infra/protocols/IController"
import { AlterNameUseCase } from "../../../useCases/AlterNameUseCase"
import { DeleteAccountUseCase } from "../../../useCases/DeleteAccountUseCase"
import { AppError } from "../../../../../shared/errors/AppError"

export class DeleteAccountController implements IController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.query

        if (!id) {
            throw new AppError({message: 'Erro ao deletar user', title: 'Erro'}, 400)
        }

        const deleteAccountUseCase = new DeleteAccountUseCase()

        const ok = await deleteAccountUseCase.execute({id: +id})

        return response.status(200).send(ok)
    }
}