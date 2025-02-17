import vine from '@vinejs/vine'

export const createTransactionValidator = vine.compile(
  vine.object({
    description: vine.string().minLength(4),
    value: vine.number().min(0),
    type: vine.string().in(['despesa', 'receita']),
    userId: vine.number().min(1).withoutDecimals(),
  })
)
