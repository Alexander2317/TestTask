// @flow

import * as React from 'react'
import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import makeStyles from '@material-ui/styles/makeStyles'

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
        <Tab label="Accounts" />
        <Tab label="Payment" />
      </Tabs>
    </Box>
  )
}

export default Users
