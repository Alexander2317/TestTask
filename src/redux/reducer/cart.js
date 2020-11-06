// @flow

import type { Cart as CartType } from '../../types/common-types'
import { actionTypes } from '../constants'

type State = CartType

type Action = {
  type: string,
  payload: CartType,
}

const initialState = {
  subtotal: 0,
  commission: 0,
  vat: 0,
  total: 0,
}

const cart = (state: State = initialState, action: Action): State => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.COUNT_CART:
      return {
        subtotal: payload.subtotal,
        commission: payload.commission,
        vat: payload.vat,
        total: payload.total,
      }
    default:
      return state
  }
}

export default cart
