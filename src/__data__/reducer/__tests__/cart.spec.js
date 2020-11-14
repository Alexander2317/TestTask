import { actionTypes } from '../../constants'

import cart from '../cart'

const initialState = {
  subtotal: 0,
  commission: 0,
  vat: 0,
  total: 0,
}

describe('cart Reducer', () => {
  it('should has initialState', () => {
    const action = {
      type: 'test',
      payload: {},
    }

    const reducer = cart(initialState, action)
    expect(reducer).toStrictEqual(initialState)
  })

  it('action type COUNT_CART', () => {
    const action = {
      type: actionTypes.COUNT_CART,
      payload: {
        subtotal: 1,
        commission: 1,
        vat: 1,
        total: 1,
      },
    }

    const reducer = cart(initialState, action)
    expect(reducer).toStrictEqual(action.payload)
  })
})
