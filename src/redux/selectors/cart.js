// @flow

import { createSelector } from 'reselect'

import helpers from './helpers'

const storeKey = 'cart'
export const getSubtotalSelector = createSelector(
  helpers.getStoreKey(storeKey, 'subtotal'),
  helpers.getIdentifier,
)
export const getCommissionSelector = createSelector(
  helpers.getStoreKey(storeKey, 'commission'),
  helpers.getIdentifier,
)
export const getVATSelector = createSelector(
  helpers.getStoreKey(storeKey, 'vat'),
  helpers.getIdentifier,
)
export const getTotalSelector = createSelector(
  helpers.getStoreKey(storeKey, 'total'),
  helpers.getIdentifier,
)
