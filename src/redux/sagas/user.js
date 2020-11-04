import { put, takeEvery } from 'redux-saga/effects'

import { actionTypes } from '../constants'

export function* selectUserSaga({ payload: { user } }) {
  yield put({
    type: actionTypes.SELECT_USER_SUCCESS,
    payload: { user },
  })
}

function* saga() {
  yield takeEvery(actionTypes.SELECT_USER_START, selectUserSaga)
}

export default saga
