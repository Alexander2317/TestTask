// @flow

import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/styles/makeStyles'

import { AddUserForm } from './components'

const useStyles = makeStyles({
  root: {
    height: '100vh',
    textAlign: 'center',
  },
})

const AddUser = (): React.Node => {
  const styles = useStyles()
  return (
    <Paper className={styles.root}>
      <AddUserForm />
    </Paper>
  )
}

export default AddUser
