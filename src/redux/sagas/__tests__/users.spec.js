import { put, select, call, delay } from 'redux-saga/effects'

import { actionTypes, base } from '../../constants'
import { users } from '../../selectors'
import { generateId } from '../../../utils'

import { addUserSaga, deleteUserSaga, editUserSaga } from '../users'
import { clearSelectUserSaga, selectUserSaga } from '../user'

describe('users Saga', () => {
  it('addUserSaga add existed user', () => {
    const action = {
      payload: {
        user: {
          nick: 'nick',
          email: 'test@test.com',
          name: 'name',
          address: 'address',
        },
        resetForm: jest.fn,
      },
    }
    const saga = addUserSaga(action)

    expect(saga.next(123).value).toEqual(call(generateId))
    expect(saga.next().value).toEqual(select(users.getEntitiesSelector))
    expect(saga.next([action.payload.user]).value).toEqual(
      put({
        type: actionTypes.ADD_USER_ERROR,
        error: {
          message: 'Email is already exist',
        },
      }),
    )
    expect(saga.next().value).toEqual(delay(base.DURATION_ALERT))
    expect(saga.next().value).toEqual(
      put({
        type: actionTypes.ADD_USER_HIDE_ALERT,
      }),
    )
    expect(saga.next().done).toBe(true)
  })

  it(`addUserSaga add didn't exist user`, () => {
    const action = {
      payload: {
        user: {
          nick: 'nick',
          email: 'test@test.com',
          name: 'name',
          address: 'address',
        },
        resetForm: jest.fn,
      },
    }
    const saga = addUserSaga(action)

    expect(saga.next().value).toEqual(call(generateId))
    expect(saga.next().value).toEqual(select(users.getEntitiesSelector))
    expect(saga.next([]).value).toEqual(
      put({
        type: actionTypes.ADD_USER_SUCCESS,
        payload: {
          user: { ...action.payload.user },
        },
      }),
    )
    expect(saga.next().value).toEqual(call(action.payload.resetForm))
    expect(saga.next().value).toEqual(delay(base.DURATION_ALERT))
    expect(saga.next().value).toEqual(
      put({
        type: actionTypes.ADD_USER_HIDE_ALERT,
      }),
    )
    expect(saga.next().done).toBe(true)
  })

  it('deleteUserSaga clear select user after delete', () => {
    const action = {
      payload: { userId: '123' },
    }
    const saga = deleteUserSaga(action)

    expect(saga.next().value).toEqual(
      put({
        type: actionTypes.DELETE_USER_SUCCESS,
        ...action,
      }),
    )

    expect(saga.next().value).toEqual(select(users.getEntitiesSelector))
    expect(saga.next([]).value).toEqual(call(clearSelectUserSaga))
    expect(saga.next().done).toBe(true)
  })

  it('deleteUserSaga select first user after delete', () => {
    const mockUser = {
      nick: 'nick',
      email: 'test@test.com',
      name: 'name',
      address: 'address',
    }
    const action = {
      payload: { userId: '123' },
    }
    const saga = deleteUserSaga(action)

    expect(saga.next().value).toEqual(
      put({
        type: actionTypes.DELETE_USER_SUCCESS,
        ...action,
      }),
    )

    expect(saga.next().value).toEqual(select(users.getEntitiesSelector))
    expect(saga.next([mockUser]).value).toEqual(
      call(selectUserSaga, {
        payload: { userEmail: 'test@test.com' },
      }),
    )
    expect(saga.next().done).toBe(true)
  })

  it('editUserSaga', () => {
    const action = {
      payload: {
        user: {
          id: '123',
          nick: 'nick',
          email: 'test@test.com',
          name: 'name',
          address: 'address',
        },
      },
    }
    const saga = editUserSaga(action)

    expect(saga.next().value).toEqual(
      put({
        type: actionTypes.EDIT_USER_SUCCESS,
        ...action,
      }),
    )
    expect(saga.next().value).toEqual(delay(base.DURATION_ALERT))
    expect(saga.next().value).toEqual(
      put({
        type: actionTypes.EDIT_USER_HIDE_ALERT,
      }),
    )
    expect(saga.next().done).toBe(true)
  })
})
