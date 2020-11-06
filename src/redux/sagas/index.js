import { all } from 'redux-saga/effects'

import users from './users'
import user from './user'
import payment from './payment'
import cart from './cart'

function* rootSaga() {
  yield all([users(), user(), payment(), cart()])
}

export default rootSaga
