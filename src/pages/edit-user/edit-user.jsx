// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import makeStyles from '@material-ui/styles/makeStyles'

import type { User } from '../../types/common-types'
import { actions, selectors } from '../../__data__'

import { EditUserForm } from './components'

const useStyles = makeStyles({
  root: {
    height: '100vh',
    textAlign: 'center',
  },
  loader: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    margin: 'auto',
  },
})

type Props = {
  match: {
    params: { id: string },
  },
  userInformation: User,
  getUserAction: Function,
}

const EditUser = (props: Props): React.Node => {
  const {
    match: {
      params: { id },
    },
    userInformation,
    getUserAction,
  } = props
  const styles = useStyles()
  React.useEffect(() => {
    if (!userInformation.id) {
      getUserAction(id)
    }
  }, [userInformation.id])
  return (
    <Paper className={styles.root}>
      {!userInformation.id ? (
        <CircularProgress color="secondary" className={styles.loader} />
      ) : (
        <EditUserForm user={userInformation} />
      )}
    </Paper>
  )
}
const mapStateToProps = (state) => ({
  userInformation: selectors.user.getUserInformationSelector(state),
})

const mapDispatchToProps = { getUserAction: actions.user.getUser }

export default (connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUser): React.AbstractComponent<{}>)
