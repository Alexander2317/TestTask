// @flow

export type Action = {
  type: string,
  payload?: any,
}

export type User = {
  id: string,
  nick: string,
  email: string,
  name: string,
  address: string,
}

export type Payment = {
  type: string,
  text: string,
  icon: string,
  vat: number,
  commission: number,
}
