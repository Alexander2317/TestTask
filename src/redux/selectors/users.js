// @flow

import { createSelector } from 'reselect'

import helpers from './helpers'

const storeKey = 'users'
export const getEntitiesSelector: Function = createSelector(
  helpers.getStoreKey({ name: storeKey, key: 'entities' }),
  helpers.getIdentifier,
)
export const getLoadingSelector: Function = createSelector(
  helpers.getStoreKey({ name: storeKey, key: 'loading' }),
  helpers.getIdentifier,
)
export const getLoadedSelector: Function = createSelector(
  helpers.getStoreKey({ name: storeKey, key: 'alert' }),
  helpers.getIdentifier,
)
export const getErrorSelector: Function = createSelector(
  helpers.getStoreKey({ name: storeKey, key: 'error' }),
  helpers.getIdentifier,
)
