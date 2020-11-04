import { all } from 'redux-saga/effects'

import users from './users'
import user from './user'

function* rootSaga() {
  yield all([users(), user()])
}

export default rootSaga
