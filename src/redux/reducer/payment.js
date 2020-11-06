// @flow

import { actionTypes } from '../constants'

type State = {
  selectedPaymentMethod: string,
}

type Action = {
  type: string,
  payload: {
    selectedPaymentMethod: string,
  },
}

const initialState = {
  selectedPaymentMethod: '',
}

const payment = (state: State = initialState, action: Action): State => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.SELECT_PAYMENT_METHOD_START:
      return {
        ...state,
        selectedPaymentMethod: '',
      }
    case actionTypes.SELECT_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        selectedPaymentMethod: payload.selectedPaymentMethod,
      }
    default:
      return state
  }
}

export default payment
