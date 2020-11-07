// @flow

import { call, put, takeEvery, select, delay } from 'redux-saga/effects'

import type { User } from '../../types/common-types'

import { generateId } from '../../utils'
import { actionTypes, base } from '../constants'
import { users } from '../selectors'

import { selectUserSaga, clearSelectUserSaga } from './user'

type AddUserSagaProps = {
  payload: {
    user: User,
    resetForm: Function,
  },
}

export function* addUserSaga({
  payload: { user, resetForm },
}: AddUserSagaProps): Generator<Object, void, any> {
  const id = yield call(generateId)
  const getUsersEntities: Array<User> = yield select(users.getEntitiesSelector)
  const isExistEmail = getUsersEntities.find(
    ({ email }) => email === user.email,
  )

  if (!isExistEmail) {
    yield put({
      type: actionTypes.ADD_USER_SUCCESS,
      payload: {
        user: { id, ...user },
      },
    })
    yield call(resetForm)
  } else {
    yield put({
      type: actionTypes.ADD_USER_ERROR,
      error: {
        message: 'Email is already exist',
      },
    })
  }

  yield delay(base.DURATION_ALERT)
  yield put({
    type: actionTypes.ADD_USER_HIDE_ALERT,
  })
}

type DeleteUserSagaProps = {
  payload: {
    userId: string,
  },
}

export function* deleteUserSaga({
  payload: { userId },
}: DeleteUserSagaProps): Generator<Object, void, any> {
  yield put({
    type: actionTypes.DELETE_USER_SUCCESS,
    payload: { userId },
  })

  const getUsersEntities: Array<User> = yield select(users.getEntitiesSelector)

  if (!getUsersEntities.length) {
    return yield call(clearSelectUserSaga)
  }

  return yield call(selectUserSaga, {
    payload: { userEmail: getUsersEntities[0].email },
  })
}

type EditUserSagaProps = {
  payload: {
    user: User,
  },
}

export function* editUserSaga({
  payload: { user },
}: EditUserSagaProps): Generator<Object, void, any> {
  yield put({
    type: actionTypes.EDIT_USER_SUCCESS,
    payload: { user },
  })

  yield delay(base.DURATION_ALERT)
  yield put({
    type: actionTypes.EDIT_USER_HIDE_ALERT,
  })
}

function* saga(): Generator<Function, void, any> {
  yield takeEvery(actionTypes.ADD_USER_START, addUserSaga)
  yield takeEvery(actionTypes.DELETE_USER_START, deleteUserSaga)
  yield takeEvery(actionTypes.EDIT_USER_START, editUserSaga)
}

export default saga
