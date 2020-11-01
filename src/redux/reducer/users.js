// @flow

import { actionTypes } from '../constants'

const initialState = []

const users = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.ADD_USER_SUCCESS:
      return [...state, payload.user]
    default:
      return state
  }
}

export default users
