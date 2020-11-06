// @flow

import type { Payment } from '../../types/common-types'
import { paymentMethods } from '../../config'
import { actionTypes } from '../constants'

type State = {
  selectedPaymentMethod: string,
  paymentMethodParams: Payment,
  entities: Array<Payment>,
}

type Action = {
  type: string,
  payload: {
    selectedPaymentMethod: string,
    paymentMethodParams: Object,
  },
}

const initialState = {
  selectedPaymentMethod: '',
  paymentMethodParams: {},
  entities: paymentMethods,
}

const payment = (state: State = initialState, action: Action): State => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.SELECT_PAYMENT_METHOD_START:
      return {
        ...state,
        selectedPaymentMethod: '',
        paymentMethodParams: {},
      }
    case actionTypes.SELECT_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        selectedPaymentMethod: payload.selectedPaymentMethod,
        paymentMethodParams: payload.paymentMethodParams,
      }
    default:
      return state
  }
}

export default payment
