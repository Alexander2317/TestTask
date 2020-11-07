// @flow

import * as React from 'react'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import makeStyles from '@material-ui/styles/makeStyles'

import type { Payment } from '../../../../../../types/common-types'
import paypalIcon from '../../../../../../assets/icons/paypal.svg'

import { constants } from '../../../../../../redux'
import { SelectionBlock } from '../../../../../../components'

const useStyles = makeStyles({
  iconPayPal: {
    width: 24,
    height: 24,
    background: `transparent url('${constants.routes.baseRoute}/${paypalIcon}') no-repeat center center / cover`,
  },
})

type Props = {
  selectedPayment: string,
  payments: Array<Payment>,
  handleChange: Function,
}

const TabPayment = (props: Props): React.Node => {
  const { selectedPayment, payments, handleChange } = props
  const styles = useStyles()

  const iconsPaymentMethod = {
    paypal: <div className={styles.iconPayPal} />,
    visa: <CreditCardIcon />,
    balance: '',
  }

  return (
    <>
      {payments?.map((payment) => (
        <React.Fragment key={payment.type}>
          <SelectionBlock
            selectedValue={selectedPayment}
            value={payment.type}
            name="payment-type"
            text={payment.text}
            icon={iconsPaymentMethod[payment.icon]}
            handleChange={handleChange}
          />
          <br />
        </React.Fragment>
      ))}
    </>
  )
}

export default TabPayment
