// @flow

import { createSelector } from 'reselect'

import utils from './utils'

const storeKey = 'users'
export const getEntitiesSelector = createSelector(
  utils.getStoreKey(storeKey, 'entities'),
  utils.getIdentifier,
)
export const getLoadingSelector = createSelector(
  utils.getStoreKey(storeKey, 'loading'),
  utils.getIdentifier,
)
export const getLoadedSelector = createSelector(
  utils.getStoreKey(storeKey, 'alert'),
  utils.getIdentifier,
)
export const getErrorSelector = createSelector(
  utils.getStoreKey(storeKey, 'error'),
  utils.getIdentifier,
)
