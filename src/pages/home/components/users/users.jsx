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

import { constants, selectors } from '../../../../redux'
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
  users: Array<{ name: string, email: string, address: string, info: string }>,
}

const Users = (props: Props): React.Node => {
  const { users } = props
  const styles = useStyles()
  const [value, setValue] = React.useState(0)
  const handleChange = React.useMemo(
    () => (event, newValue) => setValue(newValue),
    [value],
  )

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
            <Grid item>
              <Account
                name={user.name}
                selectedValue="test"
                value={user.email}
                handleChangeRadio={() => {}}
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
})

export default (connect(mapStateToProps)(Users): React.AbstractComponent<Props>)
