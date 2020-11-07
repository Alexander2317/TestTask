// @flow

import { createSelector } from 'reselect'

import helpers from './helpers'

const storeKey = 'products'
export const getEntitiesSelector = createSelector(
  helpers.getStoreKey(storeKey, 'entities'),
  helpers.getIdentifier,
)
