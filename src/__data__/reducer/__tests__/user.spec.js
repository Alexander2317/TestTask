import { actionTypes } from '../../constants'

import user from '../user'

const initialState = {
  selectedUser: '',
  userInformation: {},
}

describe('user Reducer', () => {
  it('should has initialState', () => {
    const action = {
      type: 'test',
      payload: {},
    }

    const reducer = user(initialState, action)
    expect(reducer).toStrictEqual(initialState)
  })

  it('action type GET_USER_START', () => {
    const action = {
      type: actionTypes.GET_USER_START,
    }

    const reducer = user(initialState, action)
    expect(reducer).toStrictEqual(initialState)
  })

  it('action type SELECT_USER_START', () => {
    const action = {
      type: actionTypes.SELECT_USER_START,
    }

    const reducer = user(initialState, action)
    expect(reducer).toStrictEqual(initialState)
  })

  it('action type SELECT_USER_CLEAR', () => {
    const action = {
      type: actionTypes.SELECT_USER_CLEAR,
    }

    const reducer = user(initialState, action)
    expect(reducer).toStrictEqual(initialState)
  })

  it('action type EDIT_USER_SUCCESS', () => {
    const action = {
      type: actionTypes.EDIT_USER_SUCCESS,
    }

    const reducer = user(initialState, action)
    expect(reducer).toStrictEqual(initialState)
  })

  it('action type SELECT_USER_SUCCESS', () => {
    const action = {
      type: actionTypes.SELECT_USER_SUCCESS,
      payload: { userEmail: 'test@test.com' },
    }

    const reducer = user(initialState, action)
    expect(reducer).toStrictEqual({
      userInformation: {},
      selectedUser: action.payload.userEmail,
    })
  })

  it('action type GET_USER_SUCCESS', () => {
    const action = {
      type: actionTypes.GET_USER_SUCCESS,
      payload: {
        userInformation: {
          id: '123',
          nick: 'nick',
          email: 'test@test.com',
          name: 'name',
          address: 'address',
        },
      },
    }

    const reducer = user(initialState, action)
    expect(reducer).toStrictEqual({
      selectedUser: '',
      userInformation: action.payload.userInformation,
    })
  })
})
