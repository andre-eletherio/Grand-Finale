import "reflect-metadata"
import { Request, Response } from "express"
import { IController } from "../../../../../shared/infra/protocols/IController"
import { LoginUseCase } from "../../../useCases/LoginUseCase"

export class LoginController implements IController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {email, password} = request.body

        const loginUseCase = new LoginUseCase()

        const ok = await loginUseCase.execute({email: email, password: password})

        return response.status(200).send(ok)
    }
}