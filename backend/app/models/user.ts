import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Transaction from './transaction.js'

export default class User extends BaseModel {
  @hasMany(() => Transaction)
  declare transactions: HasMany<typeof Transaction>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string | null

  @column()
  declare age: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
