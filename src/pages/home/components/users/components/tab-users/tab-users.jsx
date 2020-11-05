// @flow

import * as React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import makeStyles from '@material-ui/styles/makeStyles'

import type { User } from '../../../../../../types/common-types'
import { Account } from '../../../../../../components'
import { constants } from '../../../../../../redux'

const useStyles = makeStyles({
  usersContainer: {
    width: 'auto',
  },
})

type Props = {
  users: Array<User>,
  selectedUser: string,
  onHandleChangeRadio: Function,
  onHandleDeleteUser: Function,
}

const TabUsers = (props: Props): React.Node => {
  const { users, selectedUser, onHandleChangeRadio, onHandleDeleteUser } = props
  const styles = useStyles()

  return (
    <Grid
      container
      alignItems="center"
      justify="flex-start"
      spacing={1}
      className={styles.usersContainer}
    >
      {!users.length && (
        <Grid item>
          <Typography variant="h6">Empty user list. Add someone...</Typography>
        </Grid>
      )}
      {users.map((user) => (
        <Grid item key={user.id}>
          <Account
            id={user.id}
            name="user"
            selectedValue={selectedUser}
            value={user.email}
            handleChangeRadio={onHandleChangeRadio}
            handleDeleteUser={onHandleDeleteUser}
            userNickname={user.nick}
            userName={user.name}
            userEmail={user.email}
            userAddress={user.address}
          />
        </Grid>
      ))}
      <Grid item xs={2}>
        <IconButton
          aria-label="add-user"
          component={Link}
          to={constants.routes.addUser}
        >
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default TabUsers
