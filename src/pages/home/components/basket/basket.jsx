// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import makeStyles from '@material-ui/styles/makeStyles'

import type { Product as ProductType } from '../../../../types/common-types'
import { selectors } from '../../../../redux'

import { Product } from './components'

const useStyles = makeStyles({})

type Props = {
  entities: Array<ProductType>,
}

const Basket = ({ entities }: Props): React.Node => {
  const styles = useStyles()

  return (
    <Box className={styles.root} pt={1}>
      <Box pt={2} mb={0.8}>
        <Typography variant="h5" className={styles.title}>
          Shopping Cart
        </Typography>
      </Box>
      <Divider />
      <Box className={styles.root} pt={3}>
        {entities.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </Box>
    </Box>
  )
}

const mapStateToProps = (state) => ({
  entities: selectors.products.getEntitiesSelector(state),
})

export default (connect(mapStateToProps)(
  Basket,
): React.AbstractComponent<Props>)
