// @flow

export type User = {
  id: string,
  nick: string,
  email: string,
  name: string,
  address: string,
}

export type Action = {
  type: string,
  payload?: any,
}
