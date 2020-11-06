// @flow

import { put, select, takeEvery } from 'redux-saga/effects'

import { actionTypes } from '../constants'
import { payment } from '../selectors'

function* selectPaymentMethod({ payload: { selectedPaymentMethod } }) {
  const getEntitiesPayment = yield select(payment.getEntitiesSelector)
  const paymentMethodParams = getEntitiesPayment.find(
    ({ type }) => type === selectedPaymentMethod,
  )
  yield put({
    type: actionTypes.SELECT_PAYMENT_METHOD_SUCCESS,
    payload: { selectedPaymentMethod, paymentMethodParams },
  })
}

function* saga() {
  yield takeEvery(actionTypes.SELECT_PAYMENT_METHOD_START, selectPaymentMethod)
}

export default saga
