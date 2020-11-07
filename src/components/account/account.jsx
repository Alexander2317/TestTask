// @flow

import * as React from 'react'
import { Link } from 'react-router-dom'
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
import CloseIcon from '@material-ui/icons/Close'
import CheckIcon from '@material-ui/icons/Check'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import makeStyles from '@material-ui/styles/makeStyles'

import { constants } from '../../redux'

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    minWidth: 320,
    minHeight: 132,
  },
  avatar: {
    cursor: 'pointer',
  },
})

type Props = {
  id: string,
  name: string,
  selectedValue: string,
  value: string,
  handleChangeRadio: Function,
  handleDeleteUser: Function,
  userNickname: string,
  userName: string,
  userEmail: string,
  userAddress: string,
}

function Account({
  id,
  name,
  selectedValue,
  value,
  handleChangeRadio,
  handleDeleteUser,
  userNickname,
  userName,
  userEmail,
  userAddress,
}: Props): React.Node {
  const styles = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [showDeleteAlert, setShowDeleteAlert] = React.useState(false)

  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget)
  const handleClose = () => {
    setAnchorEl(null)
    setShowDeleteAlert(false)
  }

  const handleChange = () => handleChangeRadio(value)

  const checkDeleteUser = () => setShowDeleteAlert(true)
  const handleCancelDelete = () => {
    setAnchorEl(null)
    setShowDeleteAlert(false)
  }
  const handleDelete = () => {
    handleDeleteUser(id)
    setAnchorEl(null)
    setShowDeleteAlert(false)
  }

  const avatar = (
    <Avatar
      aria-label={userNickname}
      className={styles.avatar}
      onClick={handleChange}
    >
      {userNickname}
    </Avatar>
  )

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
        <MenuItem component={Link} to={`${constants.routes.editUser}/${id}`}>
          <EditIcon />
          &nbsp; Edit
        </MenuItem>
        <MenuItem onClick={checkDeleteUser}>
          <DeleteIcon />
          &nbsp; Delete
        </MenuItem>
        {showDeleteAlert && (
          <MenuItem>
            <Typography variant="body2">
              Are you really want to delete <strong>{userEmail}</strong>?
            </Typography>
            <IconButton aria-label="agree-delete" onClick={handleDelete}>
              <CheckIcon />
            </IconButton>
            <IconButton aria-label="cancel-delete" onClick={handleCancelDelete}>
              <CloseIcon />
            </IconButton>
          </MenuItem>
        )}
      </Menu>
    </div>
  )

  return (
    <Card className={styles.root}>
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <Radio
            checked={selectedValue === value}
            onChange={handleChange}
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
