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

export type Product = {
  id: number,
  name: string,
  brand: string,
  image: string,
  price: number,
  currency: string,
}

export type Cart = {
  subtotal: number,
  commission: number,
  vat: number,
  total: number,
}
