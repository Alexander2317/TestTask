// @flow

import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import makeStyles from '@material-ui/styles/makeStyles'

import { actions, constants, selectors } from '../../../../redux'
import { Account } from '../../../../components'

import { TabPanel } from './components'

const a11yProps = (index: number) => ({
  id: `tab-${index}`,
  'aria-controls': `tabpanel-${index}`,
})

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  usersContainer: {
    width: 'auto',
  },
})

type Props = {
  users: Array<{ nick: string, email: string, name: string, address: string }>,
  selectedUser: string,
  selectUserAction: Function,
}

const Users = (props: Props): React.Node => {
  const { users, selectedUser, selectUserAction } = props
  const styles = useStyles()
  const [value, setValue] = React.useState(0)
  const handleChange = React.useMemo(
    () => (event, newValue) => setValue(newValue),
    [value],
  )
  const onHandleChangeRadio = (user) => {
    selectUserAction(user)
  }

  return (
    <Box className={styles.root} pt={2}>
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="navigation"
      >
        <Tab label="Accounts" {...a11yProps(0)} />
        <Tab label="Payment" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid
          container
          alignItems="center"
          justify="flex-start"
          spacing={1}
          className={styles.usersContainer}
        >
          {users.map((user) => (
            <Grid item key={user.email}>
              <Account
                name="user"
                selectedValue={selectedUser}
                value={user.email}
                handleChangeRadio={onHandleChangeRadio}
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
      </TabPanel>
      <TabPanel value={value} index={1}>
        test 2
      </TabPanel>
    </Box>
  )
}

const mapStateToProps = (state) => ({
  users: selectors.users.getEntitiesSelector(state),
  selectedUser: selectors.user.getSelectedUserSelector(state),
})

const mapDispatchToProps = { selectUserAction: actions.user.selectUser }

export default (connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users): React.AbstractComponent<Props>)
