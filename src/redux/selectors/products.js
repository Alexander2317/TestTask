import { createSelector } from 'reselect'

import utils from './utils'

export const getEntitiesSelector = createSelector(
  utils.getStoreKey('products', 'entities'),
  utils.getIdentifier,
)
