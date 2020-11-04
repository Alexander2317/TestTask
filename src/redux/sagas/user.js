import { put, takeEvery, select } from 'redux-saga/effects'

import { actionTypes } from '../constants'
import { users } from '../selectors'

export function* selectUserSaga({ payload: { user } }) {
  yield put({
    type: actionTypes.SELECT_USER_SUCCESS,
    payload: { user },
  })
}

export function* getUserSaga({ payload: { user } }) {
  const getUsers = yield select(users.getEntitiesSelector)
  const userInformation = getUsers.find(({ id }) => id === Number(user))
  yield put({
    type: actionTypes.GET_USER_SUCCESS,
    payload: { user: { ...userInformation } },
  })
}

function* saga() {
  yield takeEvery(actionTypes.SELECT_USER_START, selectUserSaga)
  yield takeEvery(actionTypes.GET_USER_START, getUserSaga)
}

export default saga
