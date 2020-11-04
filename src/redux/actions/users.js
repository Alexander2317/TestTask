// @flow

import type { User, Action } from '../../types/common-types'

import { actionTypes } from '../constants'

export const addUser = (user: User): Action => ({
  type: actionTypes.ADD_USER_START,
  payload: { user },
})
