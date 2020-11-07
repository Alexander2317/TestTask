// @flow

import { createSelector } from 'reselect'

import helpers from './helpers'

const storeKey = 'payment'
export const getSelectedPaymentMethodSelector: Function = createSelector(
  helpers.getStoreKey({ name: storeKey, key: 'selectedPaymentMethod' }),
  helpers.getIdentifier,
)
export const getPaymentMethodParamsSelector: Function = createSelector(
  helpers.getStoreKey({ name: storeKey, key: 'paymentMethodParams' }),
  helpers.getIdentifier,
)
export const getEntitiesSelector: Function = createSelector(
  helpers.getStoreKey({ name: storeKey, key: 'entities' }),
  helpers.getIdentifier,
)
