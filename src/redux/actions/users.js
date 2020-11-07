// @flow

import type { User, Action } from '../../types/common-types'

import { actionTypes } from '../constants'

type PropsAddUser = {
  user: User,
  resetForm: Function,
}
export const addUser = ({ user, resetForm }: PropsAddUser): Action => ({
  type: actionTypes.ADD_USER_START,
  payload: { user, resetForm },
})

export const editUser = (user: User): Action => ({
  type: actionTypes.EDIT_USER_START,
  payload: { user },
})

export const deleteUser = (userId: string): Action => ({
  type: actionTypes.DELETE_USER_START,
  payload: { userId },
})
