import UserService from '#services/user_service'
import { createUserValidator, FindUserByIdValidator } from '#validators/user'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { StatusCodes } from 'http-status-codes'

@inject()
export default class UserController {
  constructor(private userService: UserService) {}

  async create({ request, response }: HttpContext) {
    const { name, age } = await request.validateUsing(createUserValidator)

    const newUser = await this.userService.create(name, age)

    return response.status(StatusCodes.CREATED).json(newUser)
  }

  async findById({ request, response }: HttpContext) {
    const {
      params: { userId },
    } = await request.validateUsing(FindUserByIdValidator)

    const user = await this.userService.findById(userId)

    if (!user) {
      return response.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' })
    }

    return response.status(StatusCodes.OK).json(user)
  }

  // List of users with the their transactions
  async listAll({ response }: HttpContext) {
    const usersWithTransactions = await this.userService.listAll()

    return response.status(StatusCodes.OK).json(usersWithTransactions)
  }
  async deleteById({ request, response }: HttpContext) {
    const {
      params: { userId },
    } = await request.validateUsing(FindUserByIdValidator)

    await this.userService.deleteById(userId)

    return response.status(StatusCodes.OK).json('user deleted')
  }
}
