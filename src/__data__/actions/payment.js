// @flow

import type { Action } from '../../types/common-types'

import { actionTypes } from '../constants'

export const setPaymentMethod = (selectedPaymentMethod: string): Action => ({
  type: actionTypes.SELECT_PAYMENT_METHOD_START,
  payload: { selectedPaymentMethod },
})
