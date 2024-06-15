import { User } from '@prisma/client'
import { prisma } from '../../../../../../shared/infra/db/prisma/client'
import { IUserRepository } from '../../../../repositories/IUserRepository'

export interface IRegisterUserDTO {
  name: string,
  email: string,
  password: string
}

export class UserRepository implements IUserRepository {
  async register(data: IRegisterUserDTO): Promise<User> {
    const response = await prisma.user.create({
        data
    })
    return response
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })

    return user
  }

  async alterName(id: number, name: string): Promise<User> {
    const user = await prisma.user.update({
      where: {
        id
      },
      data: {
        name
      }
    })

    return user
  }

  async deleteAccount(id: number): Promise<User> {
    const user = await prisma.user.delete({
      where: {
        id
      }
    })

    return user
  }

  async getById(id: number): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })

    return user
  }
}