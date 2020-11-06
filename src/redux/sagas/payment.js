import { put, takeEvery } from 'redux-saga/effects'

import { actionTypes } from '../constants'

function* selectPaymentMethod({ payload: { selectedPaymentMethod } }) {
  yield put({
    type: actionTypes.SELECT_PAYMENT_METHOD_SUCCESS,
    payload: { selectedPaymentMethod },
  })
}

function* saga() {
  yield takeEvery(actionTypes.SELECT_PAYMENT_METHOD_START, selectPaymentMethod)
}

export default saga
