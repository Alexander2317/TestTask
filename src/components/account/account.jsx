// @flow

import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
  },
})

type Props = {
  name: string,
  selectedValue: string,
  value: string,
  handleChangeRadio: Function,
  userName: string,
  userEmail: string,
  userAddress: string,
}

function Account({
  name,
  selectedValue,
  value,
  handleChangeRadio,
  userName,
  userEmail,
  userAddress,
}: Props): React.Node {
  const styles = useStyles()
  return (
    <Card className={styles.root}>
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <Radio
            checked={selectedValue === value}
            onChange={handleChangeRadio}
            value={value}
            name={name}
            inputProps={{ 'aria-label': value }}
          />
        </Grid>
        <Grid item xs={11}>
          <CardHeader
            avatar={<Avatar aria-label={value}>{value}</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={userName}
            subheader={userEmail}
          />
          <CardContent>
            <Typography variant="body2" component="p">
              {userAddress}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Account