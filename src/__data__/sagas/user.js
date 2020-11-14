// @flow

import { put, takeEvery, select } from 'redux-saga/effects'

import type { User } from '../../types/common-types'

import { actionTypes } from '../constants'
import { users } from '../selectors'

export function* clearSelectUserSaga(): Generator<Object, void, void> {
  yield put({
    type: actionTypes.SELECT_USER_CLEAR,
  })
}

type SelectUserSagaProps = {
  payload: {
    userEmail: string,
  },
}

export function* selectUserSaga({
  payload: { userEmail },
}: SelectUserSagaProps): Generator<Object, void, void> {
  yield put({
    type: actionTypes.SELECT_USER_SUCCESS,
    payload: { userEmail },
  })
}

type GetUserSagaProps = {
  payload: {
    userId: string,
  },
}

export function* getUserSaga({
  payload: { userId },
}: GetUserSagaProps): Generator<Array<User> | Object, void, any> {
  const getUsers: Array<User> = yield select(users.getEntitiesSelector)
  const userInformation = getUsers.find(({ id }) => id === Number(userId))
  yield put({
    type: actionTypes.GET_USER_SUCCESS,
    payload: { userInformation },
  })
}

function* saga(): Generator<Function, void, any> {
  yield takeEvery(actionTypes.SELECT_USER_START, selectUserSaga)
  yield takeEvery(actionTypes.GET_USER_START, getUserSaga)
}

export default saga
