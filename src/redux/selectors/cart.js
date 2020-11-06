import { createSelector } from 'reselect'

import utils from './utils'

const storeKey = 'cart'
export const getSubtotalSelector = createSelector(
  utils.getStoreKey(storeKey, 'subtotal'),
  utils.getIdentifier,
)
export const getCommissionSelector = createSelector(
  utils.getStoreKey(storeKey, 'commission'),
  utils.getIdentifier,
)
export const getVATSelector = createSelector(
  utils.getStoreKey(storeKey, 'vat'),
  utils.getIdentifier,
)
export const getTotalSelector = createSelector(
  utils.getStoreKey(storeKey, 'total'),
  utils.getIdentifier,
)
