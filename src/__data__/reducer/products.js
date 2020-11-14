// @flow

import type { Product } from '../../types/common-types'
import { products as productsConfig } from '../../config'

type State = {
  entities: Array<Product>,
}

const initialState = {
  entities: productsConfig,
}

const products = (state: State = initialState): State => state

export default products
