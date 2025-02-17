/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const UsersController = () => import('#controllers/user_controller')
const TransactionController = () => import('#controllers/transaction_controller')
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router
      .group(() => {
        router.post('/', [UsersController, 'create'])
        router.get('/', [UsersController, 'listAll'])
        router.get('/:userId', [UsersController, 'findById'])
      })
      .prefix('users')
    router
      .group(() => {
        router.post('/', [TransactionController, 'create'])
        router.get('/', [TransactionController, 'listAll'])
      })
      .prefix('transactions')
  })
  .prefix('/api')
