// @flow

import { createSelector } from 'reselect'

import helpers from './helpers'

const storeKey = 'users'
export const getEntitiesSelector = createSelector(
  helpers.getStoreKey(storeKey, 'entities'),
  helpers.getIdentifier,
)
export const getLoadingSelector = createSelector(
  helpers.getStoreKey(storeKey, 'loading'),
  helpers.getIdentifier,
)
export const getLoadedSelector = createSelector(
  helpers.getStoreKey(storeKey, 'alert'),
  helpers.getIdentifier,
)
export const getErrorSelector = createSelector(
  helpers.getStoreKey(storeKey, 'error'),
  helpers.getIdentifier,
)
