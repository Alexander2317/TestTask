import { createSelector } from 'reselect'

import utils from './utils'

const storeKey = 'products'
export const getEntitiesSelector = createSelector(
  utils.getStoreKey(storeKey, 'entities'),
  utils.getIdentifier,
)
