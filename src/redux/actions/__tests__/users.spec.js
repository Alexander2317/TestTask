// @flow

import { actionTypes } from '../../constants'

import { addUser, editUser, deleteUser } from '../users'

describe('user Actions', () => {
  it('addUser should return type and payload', () => {
    const user = {
      id: '123',
      nick: '123',
      email: 'test@test.com',
      name: 'name',
      address: 'address',
    }
    const resetForm = jest.fn

    expect(addUser({ user, resetForm })).toStrictEqual({
      type: actionTypes.ADD_USER_START,
      payload: { user, resetForm },
    })
  })

  it('editUser should return type and payload', () => {
    const user = {
      id: '123',
      nick: '123',
      email: 'test@test.com',
      name: 'name',
      address: 'address',
    }

    expect(editUser(user)).toStrictEqual({
      type: actionTypes.EDIT_USER_START,
      payload: { user },
    })
  })

  it('deleteUser should return type and payload', () => {
    expect(deleteUser('123')).toStrictEqual({
      type: actionTypes.DELETE_USER_START,
      payload: { userId: '123' },
    })
  })
})
