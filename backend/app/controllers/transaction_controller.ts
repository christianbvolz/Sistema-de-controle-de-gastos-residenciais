import type { HttpContext } from '@adonisjs/core/http'

import TransactionService from '#services/transaction_service'
import { StatusCodes } from 'http-status-codes'
import { createTransactionValidator } from '#validators/transaction'
import { inject } from '@adonisjs/core'

@inject()
export default class TransactionController {
  constructor(private transactionService: TransactionService) {}

  async create({ request, response }: HttpContext) {
    const { description, value, type, userId } = await request.validateUsing(
      createTransactionValidator
    )

    const newTransaction = await this.transactionService.create(
      description,
      value,
      type as 'receita' | 'despesa',
      userId
    )

    return response.status(StatusCodes.CREATED).json(newTransaction)
  }

  async listAll({ response }: HttpContext) {
    const transactions = await this.transactionService.listAll()

    return response.status(StatusCodes.OK).json(transactions)
  }
}
