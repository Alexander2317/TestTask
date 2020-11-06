import { all } from 'redux-saga/effects'

import users from './users'
import user from './user'
import payment from './payment'

function* rootSaga() {
  yield all([users(), user(), payment()])
}

export default rootSaga
