// @flow

import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Radio from '@material-ui/core/Radio'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles({
  info: {
    cursor: 'pointer',
  },
})

type Props = {
  selectedValue: string,
  value: string,
  name: string,
  icon?: React.Node,
  handleChange: Function,
  text: string,
}

const SelectionBlock = (props: Props): React.Node => {
  const { selectedValue, value, name, icon, text, handleChange } = props
  const style = useStyles()
  const onHandleChange = () => handleChange(value)

  return (
    <Paper>
      <Box px={1}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Radio
              checked={selectedValue === value}
              onChange={onHandleChange}
              value={value}
              name={name}
              inputProps={{ 'aria-label': value }}
            />
          </Grid>
          <Grid item onClick={onHandleChange} className={style.info}>
            <Grid container alignItems="center" spacing={1}>
              {icon && <Grid item>{icon}</Grid>}
              <Grid item>
                <Typography variant="body1" color="textSecondary">
                  {text}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

SelectionBlock.defaultProps = {
  icon: null,
}

export default SelectionBlock
