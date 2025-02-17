import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(4),
    age: vine.number().min(1).max(120).withoutDecimals(),
  })
)

export const FindUserByIdValidator = vine.compile(
  vine.object({
    params: vine.object({
      userId: vine.number().min(1).withoutDecimals(),
    }),
  })
)
