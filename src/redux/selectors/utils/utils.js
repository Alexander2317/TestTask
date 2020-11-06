// @flow

export const getIdentifier = (x) => x
export const getStoreKey = (name, key) => (state) => state[name][key]
