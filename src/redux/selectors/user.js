import { createSelector } from 'reselect'

import utils from './utils'

const getUser = (key) => (state) => state.user[key]

export const getSelectedUserSelector = createSelector(
  getUser('selectedUser'),
  utils.getIdentifier,
)
