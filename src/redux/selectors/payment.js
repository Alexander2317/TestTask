import { createSelector } from 'reselect'

import utils from './utils'

export const getSelectedPaymentMethodSelector = createSelector(
  utils.getStoreKey('payment', 'selectedPaymentMethod'),
  utils.getIdentifier,
)
export const getEntitiesSelector = createSelector(
  utils.getStoreKey('payment', 'entities'),
  utils.getIdentifier,
)
