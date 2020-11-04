// @flow

import * as React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MUIAlert from '@material-ui/lab/Alert'

type Props = {
  open: boolean,
  textSuccess: string,
  error?: { message: string },
}

const Alert = ({ open, error, textSuccess }: Props): React.Node => (
  <Snackbar open={open}>
    <MUIAlert severity={error?.message ? 'error' : 'success'}>
      {error?.message ? error.message : textSuccess}
    </MUIAlert>
  </Snackbar>
)

Alert.defaultProps = {
  error: {
    message: '',
  },
}

export default Alert
