// @flow

import { put, select, takeEvery } from 'redux-saga/effects'
import BigNumber from 'bignumber.js'

import { bignumberConfig } from '../../config'
import { countInterest } from '../../utils'
import { actionTypes } from '../constants'
import { products, payment } from '../selectors'

function* countCart() {
  const { commission, vat } = yield select(
    payment.getPaymentMethodParamsSelector,
  )
  const getProducts = yield select(products.getEntitiesSelector)
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

function* saga() {
  yield takeEvery(actionTypes.SELECT_PAYMENT_METHOD_SUCCESS, countCart)
}

export default saga
