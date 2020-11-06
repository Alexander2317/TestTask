import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import users from './users'
import user from './user'
import payment from './payment'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    users,
    user,
    payment,
  })

export default createRootReducer
