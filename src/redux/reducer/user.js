// @flow

import type { User } from '../../types/common-types'

import { actionTypes } from '../constants'

type State = {
  selectedUser: string,
  userInformation: User,
}

type Action = {
  type: string,
  payload: {
    userEmail: string,
    userInformation: Object,
  },
}

const initialState = {
  selectedUser: '',
  userInformation: {},
}

const user = (state: State = initialState, action: Action): State => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.GET_USER_START:
    case actionTypes.SELECT_USER_START:
    case actionTypes.EDIT_USER_SUCCESS:
      return {
        ...state,
        selectedUser: '',
        userInformation: {},
      }
    case actionTypes.SELECT_USER_SUCCESS:
      return {
        ...state,
        selectedUser: payload.userEmail,
      }
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        userInformation: payload.userInformation,
      }
    default:
      return state
  }
}

export default user
