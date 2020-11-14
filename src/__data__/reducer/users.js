// @flow

import { LOCATION_CHANGE } from 'connected-react-router'

import { users as usersConfig } from '../../config'
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
    userId: string,
  },
  error?: { message: string },
}

const initialState = {
  loading: false,
  alert: false,
  entities: usersConfig,
  error: { message: '' },
}

const users = (state: State = initialState, action: Action): State => {
  const { type, payload, error } = action

  switch (type) {
    case actionTypes.EDIT_USER_START:
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
    case actionTypes.EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        alert: true,
        entities: state.entities.map((user) => {
          if (user.id === payload.user.id) {
            return payload.user
          }
          return user
        }),
        error: { message: '' },
      }
    case actionTypes.EDIT_USER_ERROR:
    case actionTypes.ADD_USER_ERROR:
      return {
        ...state,
        error,
        loading: false,
        alert: true,
      }
    case actionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        error: { message: '' },
        loading: false,
        alert: false,
        entities: state.entities.filter((user) => user.id !== payload.userId),
      }
    case LOCATION_CHANGE:
    case actionTypes.EDIT_USER_HIDE_ALERT:
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
