import { createSelector } from 'reselect'

import utils from './utils'

const storeKey = 'payment'
export const getSelectedPaymentMethodSelector = createSelector(
  utils.getStoreKey(storeKey, 'selectedPaymentMethod'),
  utils.getIdentifier,
)
export const getPaymentMethodParamsSelector = createSelector(
  utils.getStoreKey(storeKey, 'paymentMethodParams'),
  utils.getIdentifier,
)
export const getEntitiesSelector = createSelector(
  utils.getStoreKey(storeKey, 'entities'),
  utils.getIdentifier,
)
