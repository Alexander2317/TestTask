// @flow

import type { Action } from '../../types/common-types'

import { actionTypes } from '../constants'

export const selectUser = (userEmail: string): Action => ({
  type: actionTypes.SELECT_USER_START,
  payload: { userEmail },
})
export const getUser = (userId: string): Action => ({
  type: actionTypes.GET_USER_START,
  payload: { userId },
})
