// @flow

import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/styles/makeStyles'

import { Users, Basket } from './components'

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('md')]: {
    root: {
      height: '100vh',
    },
  },
}))

const Home = (): React.Node => {
  const styles = useStyles()
  return (
    <Paper className={styles.root}>
      <Grid container spacing={0}>
        <Grid item md={8} xs={12}>
          <Users />
        </Grid>
        <Grid item md={4} xs={12}>
          <Basket />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Home
