import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Transaction extends BaseModel {
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare description: string

  @column()
  declare value: number

  @column()
  declare type: 'despesa' | 'receita'

  @column()
  declare userId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
