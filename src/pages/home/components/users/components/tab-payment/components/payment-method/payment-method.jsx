// @flow

import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Radio from '@material-ui/core/Radio'
import Typography from '@material-ui/core/Typography'

type Props = {
  selectedPayment: string,
  value: string,
  name: string,
  icon?: React.Node,
  handleChange: Function,
  text: string,
}

const PaymentMethod = (props: Props): React.Node => {
  const { selectedPayment, value, name, icon, text, handleChange } = props
  return (
    <Paper>
      <Box px={1}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Radio
              checked={selectedPayment === value}
              onChange={handleChange}
              value={value}
              name={name}
              inputProps={{ 'aria-label': value }}
            />
          </Grid>
          <Grid item container alignItems="center" xs={11} spacing={1}>
            {icon && <Grid item>{icon}</Grid>}
            <Grid item>
              <Typography variant="body1" color="textSecondary">
                {text}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

PaymentMethod.defaultProps = {
  icon: null,
}

export default PaymentMethod
