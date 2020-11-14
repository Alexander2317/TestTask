import { LOCATION_CHANGE } from 'connected-react-router'

import { actionTypes } from '../../constants'

import users from '../users'

const initialState = {
  loading: false,
  alert: false,
  entities: [
    {
      id: '1234',
      nick: 'nick',
      email: 'test@test.com',
      name: 'name',
      address: 'address',
    },
  ],
  error: { message: '' },
}

describe('users Reducer', () => {
  it('should has initialState', () => {
    const action = {
      type: 'test',
      payload: {},
    }

    const reducer = users(initialState, action)
    expect(reducer).toStrictEqual(initialState)
  })

  it('action type EDIT_USER_START', () => {
    const action = {
      type: actionTypes.EDIT_USER_START,
    }

    const reducer = users(initialState, action)
    expect(reducer).toStrictEqual({
      entities: [...initialState.entities],
      loading: true,
      alert: false,
      error: { message: '' },
    })
  })

  it('action type ADD_USER_START', () => {
    const action = {
      type: actionTypes.ADD_USER_START,
    }

    const reducer = users(initialState, action)
    expect(reducer).toStrictEqual({
      entities: [...initialState.entities],
      loading: true,
      alert: false,
      error: { message: '' },
    })
  })

  it('action type ADD_USER_SUCCESS', () => {
    const action = {
      type: actionTypes.ADD_USER_SUCCESS,
      payload: {
        user: {
          id: '12345',
          nick: 'nick',
          email: 'test@test.com',
          name: 'name',
          address: 'address',
        },
      },
    }

    const reducer = users(initialState, action)
    expect(reducer).toStrictEqual({
      entities: [...initialState.entities, action.payload.user],
      loading: false,
      alert: true,
      error: { message: '' },
    })
  })

  it('action type EDIT_USER_SUCCESS', () => {
    const action = {
      type: actionTypes.EDIT_USER_SUCCESS,
      payload: {
        user: {
          id: '1234',
          nick: 'nick 2',
          email: 'test@test.com',
          name: 'name',
          address: 'address',
        },
      },
    }

    const reducer = users(initialState, action)
    expect(reducer).toStrictEqual({
      entities: [action.payload.user],
      loading: false,
      alert: true,
      error: { message: '' },
    })
  })

  it('action type EDIT_USER_ERROR', () => {
    const action = {
      type: actionTypes.EDIT_USER_ERROR,
      error: { message: 'boom' },
    }

    const reducer = users(initialState, action)
    expect(reducer).toStrictEqual({
      entities: [...initialState.entities],
      loading: false,
      alert: true,
      error: action.error,
    })
  })

  it('action type ADD_USER_ERROR', () => {
    const action = {
      type: actionTypes.ADD_USER_ERROR,
      error: { message: 'boom' },
    }

    const reducer = users(initialState, action)
    expect(reducer).toStrictEqual({
      entities: [...initialState.entities],
      loading: false,
      alert: true,
      error: action.error,
    })
  })

  it('action type DELETE_USER_SUCCESS', () => {
    const action = {
      type: actionTypes.DELETE_USER_SUCCESS,
      payload: { userId: '1234' },
    }

    const reducer = users(initialState, action)
    expect(reducer).toStrictEqual({
      entities: [],
      loading: false,
      alert: false,
      error: { message: '' },
    })
  })

  it('action type EDIT_USER_HIDE_ALERT', () => {
    const action = {
      type: actionTypes.EDIT_USER_HIDE_ALERT,
    }

    const reducer = users(initialState, action)
    expect(reducer).toStrictEqual({
      entities: [...initialState.entities],
      loading: false,
      alert: false,
      error: { message: '' },
    })
  })

  it('action type ADD_USER_HIDE_ALERT', () => {
    const action = {
      type: actionTypes.ADD_USER_HIDE_ALERT,
    }

    const reducer = users(initialState, action)
    expect(reducer).toStrictEqual({
      entities: [...initialState.entities],
      loading: false,
      alert: false,
      error: { message: '' },
    })
  })

  it('action type LOCATION_CHANGE', () => {
    const action = {
      type: LOCATION_CHANGE,
    }

    const reducer = users(initialState, action)
    expect(reducer).toStrictEqual({
      entities: [...initialState.entities],
      loading: false,
      alert: false,
      error: { message: '' },
    })
  })
})
