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
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
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
  userNickname: string,
  userName: string,
  userEmail: string,
  userAddress: string,
}

function Account({
  name,
  selectedValue,
  value,
  handleChangeRadio,
  userNickname,
  userName,
  userEmail,
  userAddress,
}: Props): React.Node {
  const styles = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const avatar = <Avatar aria-label={userNickname}>{userNickname}</Avatar>

  const action = (
    <div>
      <IconButton aria-label="settings" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        keepMounted
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <EditIcon />
          &nbsp; Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DeleteIcon />
          &nbsp; Delete
        </MenuItem>
      </Menu>
    </div>
  )

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
            avatar={avatar}
            action={action}
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
