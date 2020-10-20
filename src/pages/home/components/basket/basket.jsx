// @flow

import * as React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
})

const Basket = (): React.Node => {
  const styles = useStyles()

  return (
    <Box className={styles.root} pt={2}>
      <Typography variant="h4" className={styles.title}>
        Shopping Cart
      </Typography>
      <br />
      <Divider variant="fullWidth" />
    </Box>
  )
}

export default Basket
