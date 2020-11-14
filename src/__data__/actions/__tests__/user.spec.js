// @flow

import { actionTypes } from '../../constants'

import { selectUser, getUser } from '../user'

describe('user Actions', () => {
  it('selectUser should return type and payload', () => {
    expect(selectUser('test@test.com')).toStrictEqual({
      type: actionTypes.SELECT_USER_START,
      payload: { userEmail: 'test@test.com' },
    })
  })

  it('getUser should return type and payload', () => {
    expect(getUser('123')).toStrictEqual({
      type: actionTypes.GET_USER_START,
      payload: { userId: '123' },
    })
  })
})
