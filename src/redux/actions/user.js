// @flow

import type { Action } from '../../types/common-types'

import { actionTypes } from '../constants'

export const selectUser = (user: string): Action => ({
  type: actionTypes.SELECT_USER_START,
  payload: { user },
})
export const getUser = (user: string): Action => ({
  type: actionTypes.GET_USER_START,
  payload: { user },
})
