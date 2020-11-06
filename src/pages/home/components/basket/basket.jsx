// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import BigNumber from 'bignumber.js'

import type { Product as ProductType } from '../../../../types/common-types'
import { selectors } from '../../../../redux'

import { Product, Info } from './components'

type Props = {
  entities: Array<ProductType>,
}

const Basket = ({ entities }: Props): React.Node => (
  <Box pt={1}>
    <Box pt={2} mb={0.8}>
      <Typography variant="h5">Shopping Cart</Typography>
    </Box>
    <Divider />
    <Box py={3}>
      {entities.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </Box>
    <Divider />
    <Box py={3}>
      <Info text="Subtotal" currency="usd" sum={new BigNumber(400).toFormat(2)} />
      <Info text="Payment processing services" currency="usd" sum={400} />
      <Info text="VAT" currency="usd" sum={400} />
    </Box>
    <Divider />
    <Box py={3}>
      <Info text="Total" currency="usd" sum={400} />
    </Box>
  </Box>
)

const mapStateToProps = (state) => ({
  entities: selectors.products.getEntitiesSelector(state),
})

export default (connect(mapStateToProps)(
  Basket,
): React.AbstractComponent<Props>)
