// @flow

const paymentMethods = [
  {
    type: 'paypal',
    text: 'PayPal',
    icon: 'paypal',
    vat: 21,
    commission: 1,
  },
  {
    type: 'visa',
    text: 'Visa',
    icon: 'visa',
    vat: 0,
    commission: 1,
  },
  {
    type: 'balance',
    text: 'Balance',
    icon: '',
    vat: 0,
    commission: 0,
  },
]

export default paymentMethods
