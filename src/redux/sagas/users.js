import { call, put, takeEvery } from 'redux-saga/effects'
import { generateId } from '../../utils'
import { actionTypes } from '../constants'

export function* addUserSaga(action) {
  const id = yield call(generateId)

  yield put({
    type: actionTypes.ADD_USER_SUCCESS,
    payload: {
      user: { id, ...action.payload.user },
    },
  })
}

function* saga() {
  yield takeEvery(actionTypes.ADD_USER_START, addUserSaga)
}

export default saga
