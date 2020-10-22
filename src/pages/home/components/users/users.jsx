// @flow

import * as React from 'react'
import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import makeStyles from '@material-ui/styles/makeStyles'
import { Account } from 'components'

import { TabPanel } from './components'

const a11yProps = (index: number) => ({
  id: `tab-${index}`,
  'aria-controls': `tabpanel-${index}`,
})

const useStyles = makeStyles({
  root: {
    height: '100vh',
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
        <Account
          name="test"
          selectedValue="test"
          value="test"
          handleChangeRadio={() => {}}
          userName="user"
          userEmail="user@user.com"
          userAddress="I'm leaving like a punk"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        test 2
      </TabPanel>
    </Box>
  )
}

export default Users
