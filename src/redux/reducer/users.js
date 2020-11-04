// @flow

import { actionTypes } from '../constants'

type User = {
  id: string,
  nick: string,
  email: string,
  name: string,
  address: string,
}

type State = {
  loading: boolean,
  alert: boolean,
  entities: Array<Object>,
  error?: { message: string },
}

type Action = {
  type: string,
  payload: {
    user: User,
  },
  error?: { message: string },
}

const initialState = {
  loading: false,
  alert: false,
  entities: [],
  error: { message: '' },
}

const users = (state: State = initialState, action: Action): State => {
  const { type, payload, error } = action

  switch (type) {
    case actionTypes.ADD_USER_START:
      return {
        ...state,
        loading: true,
        alert: false,
        error: { message: '' },
      }
    case actionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        alert: true,
        entities: [...state.entities, payload.user],
        error: { message: '' },
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
