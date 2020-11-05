// @flow

import * as React from 'react'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import makeStyles from '@material-ui/styles/makeStyles'

import paypalIcon from '../../../../../../assets/icons/paypal.svg'

import { PaymentMethod } from './components'

const useStyles = makeStyles({
  iconPayPal: {
    width: 24,
    height: 24,
    background: `transparent url('${paypalIcon}') no-repeat center center / cover`,
  },
})
const TabPayment = (): React.Node => {
  const styles = useStyles()
  return (
    <div>
      <PaymentMethod
        selectedPayment="test"
        value="test"
        name="name"
        text="Balance"
        handleChange={() => {}}
      />
      <br />
      <PaymentMethod
        selectedPayment="test"
        value="test"
        name="name"
        text="Visa"
        icon={<CreditCardIcon />}
        handleChange={() => {}}
      />
      <br />
      <PaymentMethod
        selectedPayment="test"
        value="test"
        name="name"
        text="PayPal"
        icon={<div className={styles.iconPayPal} />}
        handleChange={() => {}}
      />
    </div>
  )
}

export default TabPayment
