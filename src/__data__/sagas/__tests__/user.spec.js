import { put, select } from 'redux-saga/effects'

import { actionTypes } from '../../constants'
import { users } from '../../selectors'

import { clearSelectUserSaga, selectUserSaga, getUserSaga } from '../user'

describe('user Saga', () => {
  it('clearSelectUserSaga', () => {
    const saga = clearSelectUserSaga()

    expect(saga.next().value).toEqual(
      put({
        type: actionTypes.SELECT_USER_CLEAR,
      }),
    )
    expect(saga.next().done).toBe(true)
  })

  it('selectUserSaga', () => {
    const action = {
      payload: { userEmail: 'test@test.com' },
    }
    const saga = selectUserSaga(action)

    expect(saga.next().value).toEqual(
      put({
        type: actionTypes.SELECT_USER_SUCCESS,
        ...action,
      }),
    )
    expect(saga.next().done).toBe(true)
  })

  it('getUserSaga', () => {
    const action = {
      payload: { userId: '123' },
    }
    const saga = getUserSaga(action)

    expect(saga.next().value).toEqual(select(users.getEntitiesSelector))
    expect(saga.next([]).value).toEqual(
      put({
        type: actionTypes.GET_USER_SUCCESS,
        payload: {},
      }),
    )
    expect(saga.next().done).toBe(true)
  })
})
