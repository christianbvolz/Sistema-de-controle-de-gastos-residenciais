import Transaction from '#models/transaction'
import User from '#models/user'

export default class TransactionService {
  async create(description: string, value: number, type: 'despesa' | 'receita', userId: number) {
    const user = await User.find(userId)
    if (!user) {
      throw new Error('User not found')
    }

    if (user.age < 18 && type === 'receita') {
      throw new Error('Age must be greater than 18')
    }

    return await Transaction.create({ description, value, type, userId })
  }

  async listAll() {
    return await Transaction.query().select().preload('user')
  }
}
