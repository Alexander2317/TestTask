// @flow

import { actionTypes } from '../constants'

type State = {
  selectedUser: string,
}

type Action = {
  type: string,
  payload: {
    user: string,
  },
}

const initialState = {
  selectedUser: '',
}

const user = (state: State = initialState, action: Action): State => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.SELECT_USER_START:
      return {
        ...state,
        selectedUser: '',
      }
    case actionTypes.SELECT_USER_SUCCESS:
      return {
        ...state,
        selectedUser: payload.user,
      }
    default:
      return state
  }
}

export default user
