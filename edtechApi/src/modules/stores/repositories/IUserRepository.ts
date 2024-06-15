import { User } from "@prisma/client";
import { IRegisterUserDTO } from "../infra/db/prisma/repositories/UserRepository";

export interface IUserRepository {
    register(data: IRegisterUserDTO): Promise<User>
    getUserByEmail(email: string): Promise<User | null>
    alterName(id: number, name: string): Promise<User>
    deleteAccount(id: number): Promise<User>
    getById(id: number): Promise<User | null>
}
