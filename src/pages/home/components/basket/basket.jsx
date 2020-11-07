// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/styles/makeStyles'

import type {
  Payment,
  Product as ProductType,
} from '../../../../types/common-types'
import { constants, selectors } from '../../../../redux'

import { Product, SumInfo } from '../../../../components'

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down('md')]: {
    root: {
      padding: theme.spacing(3),
    },
  },
}))

type Props = {
  selectedUser: string,
  products: Array<ProductType>,
  paymentParams: Payment,
  currentSubtotal: number,
  currentCommission: number,
  currentVAT: number,
  currentTotal: number,
}

const Basket = ({
  selectedUser,
  products,
  paymentParams: { commission, vat },
  currentSubtotal,
  currentCommission,
  currentVAT,
  currentTotal,
}: Props): React.Node => {
  const styles = useStyles()
  return (
    <Box pt={1} className={styles.root}>
      <Box pt={2} mb={0.8}>
        <Typography variant="h5">Shopping Cart</Typography>
      </Box>
      <Divider />
      <Box py={3}>
        {products?.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </Box>
      <Divider />
      <Box py={3}>
        <SumInfo text="Subtotal" currency="usd" sum={currentSubtotal} />
        {!!commission && (
          <SumInfo
            text={`Payment processing services ${commission}%`}
            currency="usd"
            sum={currentCommission}
          />
        )}
        {!!vat && (
          <SumInfo text={`VAT ${vat}%`} currency="usd" sum={currentVAT} />
        )}
      </Box>
      <Divider />
      <Box py={3}>
        <SumInfo text="Total" currency="usd" sum={currentTotal} />
      </Box>
      <Button
        component={Link}
        to={constants.routes.thanks}
        color="primary"
        variant="contained"
        disabled={!selectedUser}
      >
        Complete order
      </Button>
    </Box>
  )
}

const mapStateToProps = (state) => ({
  selectedUser: selectors.user.getSelectedUserSelector(state),
  products: selectors.products.getEntitiesSelector(state),
  paymentParams: selectors.payment.getPaymentMethodParamsSelector(state),
  currentSubtotal: selectors.cart.getSubtotalSelector(state),
  currentCommission: selectors.cart.getCommissionSelector(state),
  currentVAT: selectors.cart.getVATSelector(state),
  currentTotal: selectors.cart.getTotalSelector(state),
})

export default (connect(mapStateToProps)(
  Basket,
): React.AbstractComponent<Props>)
