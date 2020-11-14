// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import makeStyles from '@material-ui/styles/makeStyles'

import type { Payment, User } from '../../../../types/common-types'
import { actions, selectors } from '../../../../__data__'

import { TabPanel, TabUsers, TabPayment } from './components'

const a11yProps = (index: number) => ({
  id: `tab-${index}`,
  'aria-controls': `tabpanel-${index}`,
})

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('md')]: {
    root: {
      height: '100vh',
    },
  },
  usersContainer: {
    width: 'auto',
  },
}))

type Props = {
  users: Array<User>,
  selectedUser: string,
  selectUserAction: Function,
  deleteUserAction: Function,
  setPaymentMethodAction: Function,
  selectedPaymentMethod: string,
  payments: Array<Payment>,
}

const Users = (props: Props): React.Node => {
  const {
    users,
    selectedUser,
    selectUserAction,
    deleteUserAction,
    selectedPaymentMethod,
    setPaymentMethodAction,
    payments,
  } = props
  const checkInitialSelectUser = selectedUser === '' && users.length !== 0
  const checkInitialPaymentMethod = !selectedPaymentMethod && payments.length

  React.useEffect(() => {
    if (checkInitialSelectUser) {
      selectUserAction(users[0].email)
    }

    if (checkInitialPaymentMethod) {
      setPaymentMethodAction(payments[0].type)
    }
  }, [checkInitialSelectUser, checkInitialPaymentMethod])

  const styles = useStyles()

  const [value, setValue] = React.useState(0)

  const handleChange = React.useMemo(
    () => (event: SyntheticEvent<HTMLButtonElement>, newValue) =>
      setValue(newValue),
    [value],
  )
  const onHandleChangeRadio = (userEmail) => selectUserAction(userEmail)
  const onHandleDeleteUser = (userId) => deleteUserAction(userId)

  return (
    <Box className={styles.root} pt={2}>
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="navigation"
      >
        <Tab label="Accounts" {...a11yProps(0)} />
        <Tab label="Payment" disabled={!selectedUser} {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TabUsers
          users={users}
          selectedUser={selectedUser}
          onHandleChangeRadio={onHandleChangeRadio}
          onHandleDeleteUser={onHandleDeleteUser}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabPayment
          selectedPayment={selectedPaymentMethod}
          payments={payments}
          handleChange={setPaymentMethodAction}
        />
      </TabPanel>
    </Box>
  )
}

const mapStateToProps = (state) => ({
  users: selectors.users.getEntitiesSelector(state),
  selectedUser: selectors.user.getSelectedUserSelector(state),
  selectedPaymentMethod: selectors.payment.getSelectedPaymentMethodSelector(
    state,
  ),
  payments: selectors.payment.getEntitiesSelector(state),
})

const mapDispatchToProps = {
  selectUserAction: actions.user.selectUser,
  deleteUserAction: actions.users.deleteUser,
  setPaymentMethodAction: actions.payment.setPaymentMethod,
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users): React.AbstractComponent<Props>)
