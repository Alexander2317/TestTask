// @flow

import { actionTypes } from '../../constants'

import { setPaymentMethod } from '../payment'

describe('payment Actions', () => {
  it('setPaymentMethod should return type and payload', () => {
    expect(setPaymentMethod('visa')).toStrictEqual({
      type: actionTypes.SELECT_PAYMENT_METHOD_START,
      payload: { selectedPaymentMethod: 'visa' },
    })
  })
})
