import "reflect-metadata"
import { Request, Response } from "express"
import { IController } from "../../../../../shared/infra/protocols/IController"
import { RegisterUserUseCase } from "../../../useCases/RegisterUserUseCase"

export class RegisterController implements IController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {name, email, password} = request.body

        const registerUseCase = new RegisterUserUseCase()

        const user = await registerUseCase.execute({name: name, email: email, password: password})

        return response.status(200).send(user)
    }
}