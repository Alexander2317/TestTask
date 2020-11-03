// @flow

import { actionTypes } from '../constants'

const initialState = {
  loading: false,
  alert: false,
  entities: [],
  error: false,
}

const users = (state = initialState, action) => {
  const { type, payload, error } = action

  switch (type) {
    case actionTypes.ADD_USER_START:
      return {
        ...state,
        loading: true,
        alert: false,
        error: false,
      }
    case actionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        alert: true,
        entities: [...state.entities, payload.user],
        error: false,
      }
    case actionTypes.ADD_USER_ERROR:
      return {
        ...state,
        error,
        loading: false,
        alert: true,
      }
    case actionTypes.ADD_USER_HIDE_ALERT:
      return {
        ...state,
        alert: false,
      }
    default:
      return state
  }
}

export default users
