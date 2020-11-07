import { put, select } from 'redux-saga/effects'

import { actionTypes } from '../../constants'
import { payment, products } from '../../selectors'

import { countCart } from '../cart'

describe('cart Saga', () => {
  it('countCart', () => {
    const saga = countCart()

    expect(saga.next().value).toEqual(
      select(payment.getPaymentMethodParamsSelector),
    )
    expect(saga.next({ commission: 0, vat: 0 }).value).toEqual(
      select(products.getEntitiesSelector),
    )

    const action = {
      type: actionTypes.COUNT_CART,
      payload: {
        subtotal: '0.00',
        commission: '0.00',
        vat: '0.00',
        total: '0.00',
      },
    }
    expect(saga.next([]).value).toEqual(put(action))
    expect(saga.next().done).toBe(true)
  })
})
