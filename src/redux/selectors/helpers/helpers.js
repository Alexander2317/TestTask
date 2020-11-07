// @flow

export const getIdentifier = (x: string): string => x
export const getStoreKey = (name: string, key: string) => (
  state: string,
): any => state[name][key]
