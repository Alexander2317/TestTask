// @flow

import { createSelector } from 'reselect'

import helpers from './helpers'

const storeKey = 'cart'
export const getSubtotalSelector: Function = createSelector(
  helpers.getStoreKey({ name: storeKey, key: 'subtotal' }),
  helpers.getIdentifier,
)
export const getCommissionSelector: Function = createSelector(
  helpers.getStoreKey({ name: storeKey, key: 'commission' }),
  helpers.getIdentifier,
)
export const getVATSelector: Function = createSelector(
  helpers.getStoreKey({ name: storeKey, key: 'vat' }),
  helpers.getIdentifier,
)
export const getTotalSelector: Function = createSelector(
  helpers.getStoreKey({ name: storeKey, key: 'total' }),
  helpers.getIdentifier,
)
