import { createSelector } from 'reselect'

import utils from './utils'

export const getSelectedUserSelector = createSelector(
  utils.getStoreKey('user', 'selectedUser'),
  utils.getIdentifier,
)
export const getUserInformationSelector = createSelector(
  utils.getStoreKey('user', 'userInformation'),
  utils.getIdentifier,
)
