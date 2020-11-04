import { createSelector } from 'reselect'

import utils from './utils'

export const getEntitiesSelector = createSelector(
  utils.getStoreKey('users', 'entities'),
  utils.getIdentifier,
)
export const getLoadingSelector = createSelector(
  utils.getStoreKey('users', 'loading'),
  utils.getIdentifier,
)
export const getLoadedSelector = createSelector(
  utils.getStoreKey('users', 'alert'),
  utils.getIdentifier,
)
export const getErrorSelector = createSelector(
  utils.getStoreKey('users', 'error'),
  utils.getIdentifier,
)
