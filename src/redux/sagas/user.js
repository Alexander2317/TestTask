// @flow

import { put, takeEvery, select } from 'redux-saga/effects'

import { actionTypes } from '../constants'
import { users } from '../selectors'

type selectUserSagaProps = {
  payload: {
    userEmail: string,
  },
}

export function* selectUserSaga({
  payload: { userEmail },
}: selectUserSagaProps) {
  yield put({
    type: actionTypes.SELECT_USER_SUCCESS,
    payload: { userEmail },
  })
}

type getUserSagaProps = {
  payload: {
    userId: string,
  },
}

export function* getUserSaga({ payload: { userId } }: getUserSagaProps) {
  const getUsers = yield select(users.getEntitiesSelector)
  const userInformation = getUsers.find(({ id }) => id === Number(userId))
  yield put({
    type: actionTypes.GET_USER_SUCCESS,
    payload: { userInformation },
  })
}

function* saga() {
  yield takeEvery(actionTypes.SELECT_USER_START, selectUserSaga)
  yield takeEvery(actionTypes.GET_USER_START, getUserSaga)
}

export default saga
