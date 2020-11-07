// @flow

import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

import type { Product as ProductType } from '../../types/common-types'
import { currencySymbols } from '../../config'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    width: '100%',
  },
  rootText: {
    height: '100%',
  },
  image: {
    display: 'block',
    width: 120,
    height: 120,
  },
})

const Product = (props: ProductType): React.Node => {
  const { name, brand, image, price, currency } = props
  const style = useStyles()

  return (
    <Grid
      container
      direction="row"
      alignItems="stretch"
      spacing={2}
      className={style.root}
    >
      <Grid item>
        <img src={image} alt={brand} className={style.image} />
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          justify="space-between"
          className={style.rootText}
        >
          <Grid item>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2">{brand}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              {currencySymbols[currency]}
              {price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Product
