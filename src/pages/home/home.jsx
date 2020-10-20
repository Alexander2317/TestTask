// @flow

import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/styles/makeStyles'

import { Users, Basket } from './components'

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
})

const Home = (): React.Node => {
  const styles = useStyles()
  return (
    <Paper className={styles.root}>
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <Users />
        </Grid>
        <Grid item xs={4}>
          <Basket />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Home
