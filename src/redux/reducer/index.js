import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import users from './users'
import user from './user'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    users,
    user,
  })

export default createRootReducer
