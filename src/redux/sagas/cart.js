// @flow

import { put, select, takeEvery } from 'redux-saga/effects'
import BigNumber from 'bignumber.js'

import type { Cart, Product } from '../../types/common-types'
import { bignumberConfig } from '../../config'
import { countInterest } from '../../utils'

import { actionTypes } from '../constants'
import { products, payment } from '../selectors'

export function* countCart(): Generator<Object, void, any> {
  const { commission, vat }: Cart = yield select(
    payment.getPaymentMethodParamsSelector,
  )
  const getProducts: Array<Product> = yield select(products.getEntitiesSelector)
  const countSubTotal = getProducts
    .reduce((acc, { price }) => acc.plus(price), new BigNumber(0))
    .toFormat(bignumberConfig.base.DECIMAL_PLACES)
  const countCommission = countInterest({
    value: countSubTotal,
    percent: commission,
  })
  const countVAT = countInterest({
    value: countSubTotal,
    percent: vat,
  })
  const countTotal = new BigNumber(countSubTotal)
    .plus(countCommission)
    .plus(countVAT)
    .toFormat(bignumberConfig.base.DECIMAL_PLACES)

  yield put({
    type: actionTypes.COUNT_CART,
    payload: {
      subtotal: countSubTotal,
      commission: countCommission,
      vat: countVAT,
      total: countTotal,
    },
  })
}

function* saga(): Generator<Function, void, any> {
  yield takeEvery(actionTypes.SELECT_PAYMENT_METHOD_SUCCESS, countCart)
}

export default saga
