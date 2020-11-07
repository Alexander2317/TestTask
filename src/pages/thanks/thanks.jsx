// @flow

import * as React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    textAlign: 'center',
  },
  [theme.breakpoints.down('md')]: {
    title: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
}))

const Thanks = (): React.Node => {
  const styles = useStyles()
  return (
    <Paper className={styles.root}>
      <Grid
        container
        direction="column"
        justify="center"
        className={styles.root}
      >
        <Grid item>
          <Typography variant="h2" className={styles.title}>
            Thanks for you purchasing! =)
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Thanks
