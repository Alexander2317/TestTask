import { createSelector } from 'reselect'

import utils from './utils'

const getUsers = (key) => (state) => state.users[key]

export const getEntitiesSelector = createSelector(
  getUsers('entities'),
  utils.getIdentifier,
)
export const getLoadingSelector = createSelector(
  getUsers('loading'),
  utils.getIdentifier,
)
export const getLoadedSelector = createSelector(
  getUsers('alert'),
  utils.getIdentifier,
)
export const getErrorSelector = createSelector(
  getUsers('error'),
  utils.getIdentifier,
)
