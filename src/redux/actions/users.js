import { actionTypes } from '../constants'

export const addUser = (user) => ({
  type: actionTypes.ADD_USER_START,
  payload: { user },
})
