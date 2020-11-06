import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import users from './users'
import user from './user'
import payment from './payment'
import products from './products'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    users,
    user,
    payment,
    products,
  })

export default createRootReducer
