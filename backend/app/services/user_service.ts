import User from '#models/user'

export default class UserService {
  async create(name: string, age: number) {
    return await User.create({ name, age })
  }

  async findById(id: number) {
    return await User.find(id)
  }
  // List of users with the their transactions
  async listAll() {
    return await User.query().select().preload('transactions')
  }

  async deleteById(id: number) {
    const user = await this.findById(id)
    await user?.delete()
  }
}
