import { put, select } from 'redux-saga/effects'

import { actionTypes } from '../../constants'
import { payment } from '../../selectors'

import { selectPaymentMethod } from '../payment'

describe('payment Saga', () => {
  it('selectPaymentMethod', () => {
    const action = {
      payload: { selectedPaymentMethod: 'visa' },
    }
    const paymentMethod = {
      type: 'visa',
      text: 'test',
      icon: 'icon.png',
      vat: 0,
      commission: 0,
    }

    const saga = selectPaymentMethod(action)

    expect(saga.next().value).toEqual(select(payment.getEntitiesSelector))
    expect(saga.next([paymentMethod]).value).toEqual(
      put({
        type: actionTypes.SELECT_PAYMENT_METHOD_SUCCESS,
        payload: {
          selectedPaymentMethod: 'visa',
          paymentMethodParams: paymentMethod,
        },
      }),
    )
    expect(saga.next().done).toBe(true)
  })
})
