// @flow

import * as React from 'react'
import Box from '@material-ui/core/Box'

type Props = {
  children: React.Node,
  value: string,
  index: number,
}

const TabPanel = ({ children, value, index }: Props): React.Node => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
  >
    {value === index && <Box p={3}>{children}</Box>}
  </div>
)

export default TabPanel
