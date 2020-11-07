// @flow

import * as React from 'react'
import { Route, Redirect, Switch } from 'react-router'

import Home from './home'
import AddUser from './add-user'
import EditUser from './edit-user'
import Thanks from './thanks'
import NotFound from './not-found'

import { constants } from '../redux'

const { routes } = constants

const Pages = (): React.Node => (
  <Switch>
    <Redirect exact strict from="/" to={routes.home} />
    <Redirect exact strict from={`${routes.baseRoute}/`} to={routes.home} />
    <Route exact strict path={routes.home} component={Home} />
    <Route exact strict path={routes.addUser} component={AddUser} />
    <Route exact strict path={`${routes.editUser}/:id`} component={EditUser} />
    <Route exact strict path={routes.thanks} component={Thanks} />
    <Route component={NotFound} />
  </Switch>
)

export default Pages
