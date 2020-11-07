// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import type {
  Payment,
  Product as ProductType,
} from '../../../../types/common-types'
import { selectors } from '../../../../redux'

import { Product, SumInfo } from '../../../../components'

type Props = {
  products: Array<ProductType>,
  paymentParams: Payment,
  currentSubtotal: number,
  currentCommission: number,
  currentVAT: number,
  currentTotal: number,
}

const Basket = ({
  products,
  paymentParams: { commission, vat },
  currentSubtotal,
  currentCommission,
  currentVAT,
  currentTotal,
}: Props): React.Node => (
  <Box pt={1}>
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
  </Box>
)

const mapStateToProps = (state) => ({
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
