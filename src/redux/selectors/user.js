// @flow

import { createSelector } from 'reselect'

import helpers from './helpers'

const storeKey = 'user'
export const getSelectedUserSelector = createSelector(
  helpers.getStoreKey(storeKey, 'selectedUser'),
  helpers.getIdentifier,
)
export const getUserInformationSelector = createSelector(
  helpers.getStoreKey(storeKey, 'userInformation'),
  helpers.getIdentifier,
)
