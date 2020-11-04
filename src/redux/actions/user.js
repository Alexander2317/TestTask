// @flow

import type { Action } from '../../types/common-types'

import { actionTypes } from '../constants'

export const selectUser = (user: string): Action => ({
  type: actionTypes.SELECT_USER_START,
  payload: { user },
})
