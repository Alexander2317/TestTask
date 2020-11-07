// @flow

import { createSelector } from 'reselect'

import helpers from './helpers'

const storeKey = 'payment'
export const getSelectedPaymentMethodSelector = createSelector(
  helpers.getStoreKey(storeKey, 'selectedPaymentMethod'),
  helpers.getIdentifier,
)
export const getPaymentMethodParamsSelector = createSelector(
  helpers.getStoreKey(storeKey, 'paymentMethodParams'),
  helpers.getIdentifier,
)
export const getEntitiesSelector = createSelector(
  helpers.getStoreKey(storeKey, 'entities'),
  helpers.getIdentifier,
)
