// @flow

import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

import { currencySymbols } from '../../config'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

type Props = {
  text: string,
  sum: number,
  currency: string,
}

const SumInfo = ({ text, sum, currency }: Props): React.Node => {
  const style = useStyles()
  return (
    <Grid container spacing={2} justify="space-between" className={style.root}>
      <Grid item>
        <Typography variant="body2">{text}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          {currencySymbols[currency]}
          {sum}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default SumInfo
