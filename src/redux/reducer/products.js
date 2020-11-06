// @flow

import type { Product } from '../../types/common-types'
import { products as productsConfig } from '../../config'

type State = {
  entities: Array<Product>,
}

type Action = {
  type: string,
}

const initialState = {
  entities: productsConfig,
}

const products = (state: State = initialState, action: Action): State => {
  const { type } = action

  switch (type) {
    default:
      return state
  }
}

export default products
