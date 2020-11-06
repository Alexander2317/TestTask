// @flow

import { createSelector } from 'reselect'

import utils from './utils'

const storeKey = 'user'
export const getSelectedUserSelector = createSelector(
  utils.getStoreKey(storeKey, 'selectedUser'),
  utils.getIdentifier,
)
export const getUserInformationSelector = createSelector(
  utils.getStoreKey(storeKey, 'userInformation'),
  utils.getIdentifier,
)
