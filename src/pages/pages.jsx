// @flow

import * as React from 'react'
import { Route, Switch } from 'react-router'

import Home from './home'
import AddUser from './add-user'
import EditUser from './edit-user'
import NotFound from './not-found'

import { constants } from '../redux'

const { routes } = constants

const Pages = (): React.Node => (
  <Switch>
    <Route exact strict path={routes.home} component={Home} />
    <Route exact strict path={routes.addUser} component={AddUser} />
    <Route exact strict path={`${routes.editUser}/:id`} component={EditUser} />
    <Route component={NotFound} />
  </Switch>
)

export default Pages
