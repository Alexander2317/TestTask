// @flow

import { createSelector } from 'reselect'

import helpers from './helpers'

const storeKey = 'user'
export const getSelectedUserSelector: Function = createSelector(
  helpers.getStoreKey({ name: storeKey, key: 'selectedUser' }),
  helpers.getIdentifier,
)
export const getUserInformationSelector: Function = createSelector(
  helpers.getStoreKey({ name: storeKey, key: 'userInformation' }),
  helpers.getIdentifier,
)
