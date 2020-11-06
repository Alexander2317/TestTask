// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import makeStyles from '@material-ui/styles/makeStyles'

import type { Payment } from '../../../../../../types/common-types'
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

const iconsPaymentMethod = (styles) => ({
  paypal: <div className={styles.iconPayPal} />,
  visa: <CreditCardIcon />,
  balance: '',
})

type Props = {
  setPaymentMethodAction: Function,
  selectedPaymentMethod: string,
  entities: Array<Payment>,
}

const TabPayment = (props: Props): React.Node => {
  const { setPaymentMethodAction, selectedPaymentMethod, entities } = props
  const styles = useStyles()

  return (
    <>
      {entities.map((payment) => (
        <React.Fragment key={payment.type}>
          <PaymentMethod
            selectedPayment={selectedPaymentMethod}
            value={payment.type}
            name="payment-type"
            text={payment.text}
            icon={iconsPaymentMethod(styles)[payment.icon]}
            handleChange={setPaymentMethodAction}
          />
          <br />
        </React.Fragment>
      ))}
    </>
  )
}

const mapStateToProps = (state) => ({
  selectedPaymentMethod: selectors.payment.getSelectedPaymentMethodSelector(
    state,
  ),
  entities: selectors.payment.getEntitiesSelector(state),
})

const mapDispatchToProps = {
  setPaymentMethodAction: actions.payment.setPaymentMethod,
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabPayment): React.AbstractComponent<Props>)
