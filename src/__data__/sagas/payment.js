// @flow

import { put, select, takeEvery } from 'redux-saga/effects'

import type { Payment } from '../../types/common-types'

import { actionTypes } from '../constants'
import { payment } from '../selectors'

type SelectPaymentMethodProps = {
  payload: {
    selectedPaymentMethod: string,
  },
}

export function* selectPaymentMethod({
  payload: { selectedPaymentMethod },
}: SelectPaymentMethodProps): Generator<Object, void, any> {
  const getEntitiesPayment: Array<Payment> = yield select(
    payment.getEntitiesSelector,
  )
  const paymentMethodParams = getEntitiesPayment.find(
    ({ type }) => type === selectedPaymentMethod,
  )
  yield put({
    type: actionTypes.SELECT_PAYMENT_METHOD_SUCCESS,
    payload: { selectedPaymentMethod, paymentMethodParams },
  })
}

function* saga(): Generator<Function, void, any> {
  yield takeEvery(actionTypes.SELECT_PAYMENT_METHOD_START, selectPaymentMethod)
}

export default saga
