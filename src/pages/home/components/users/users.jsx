// @flow

import * as React from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import makeStyles from '@material-ui/styles/makeStyles'

import { constants } from '../../../../redux'
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

const Users = (): React.Node => {
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
          <Grid item>
            <Account
              name="test"
              selectedValue="test"
              value="test"
              handleChangeRadio={() => {}}
              userName="user"
              userEmail="user@user.com"
              userAddress="I'm leaving like a punk"
            />
          </Grid>
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

export default Users
