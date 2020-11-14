// @flow

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import users from './users'
import user from './user'
import payment from './payment'
import products from './products'
import cart from './cart'

const createRootReducer = (history: Object): Function =>
  combineReducers({
    router: connectRouter(history),
    users,
    user,
    payment,
    products,
    cart,
  })

export default createRootReducer
