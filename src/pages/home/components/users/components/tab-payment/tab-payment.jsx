// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import makeStyles from '@material-ui/styles/makeStyles'

import paypalIcon from '../../../../../../assets/icons/paypal.svg'
import { actions, selectors } from '../../../../../../redux'

import { PaymentMethod } from './components'

const useStyles = makeStyles({
  iconPayPal: {
    width: 24,
    height: 24,
    background: `transparent url('${paypalIcon}') no-repeat center center / cover`,
  },
})

type Props = {
  setPaymentMethodAction: Function,
  selectedPaymentMethod: string,
}

const TabPayment = (props: Props): React.Node => {
  const { setPaymentMethodAction, selectedPaymentMethod } = props
  const styles = useStyles()

  return (
    <div>
      <PaymentMethod
        selectedPayment={selectedPaymentMethod}
        value="balance"
        name="name"
        text="Balance"
        handleChange={setPaymentMethodAction}
      />
      <br />
      <PaymentMethod
        selectedPayment={selectedPaymentMethod}
        value="visa"
        name="name"
        text="Visa"
        icon={<CreditCardIcon />}
        handleChange={setPaymentMethodAction}
      />
      <br />
      <PaymentMethod
        selectedPayment={selectedPaymentMethod}
        value="paypal"
        name="name"
        text="PayPal"
        icon={<div className={styles.iconPayPal} />}
        handleChange={setPaymentMethodAction}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  selectedPaymentMethod: selectors.payment.getSelectedPaymentMethodSelector(
    state,
  ),
})

const mapDispatchToProps = {
  setPaymentMethodAction: actions.payment.setPaymentMethod,
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabPayment): React.AbstractComponent<Props>)
