import { actionTypes } from '../../constants'

import payment from '../payment'

const initialState = {
  selectedPaymentMethod: '',
  paymentMethodParams: {},
  entities: [],
}

describe('payment Reducer', () => {
  it('should has initialState', () => {
    const action = {
      type: 'test',
      payload: {},
    }

    const reducer = payment(initialState, action)
    expect(reducer).toStrictEqual(initialState)
  })

  it('action type SELECT_PAYMENT_METHOD_START', () => {
    const action = {
      type: actionTypes.SELECT_PAYMENT_METHOD_START,
    }

    const reducer = payment(initialState, action)
    expect(reducer).toStrictEqual(initialState)
  })

  it('action type SELECT_PAYMENT_METHOD_SUCCESS', () => {
    const action = {
      type: actionTypes.SELECT_PAYMENT_METHOD_SUCCESS,
      payload: {
        selectedPaymentMethod: 'visa',
        paymentMethodParams: {
          type: 'visa',
          text: 'Visa',
          icon: '/img/img.png',
          vat: 123,
          commission: 123,
        },
      },
    }

    const reducer = payment(initialState, action)
    expect(reducer).toStrictEqual({
      ...action.payload,
      entities: [],
    })
  })
})
