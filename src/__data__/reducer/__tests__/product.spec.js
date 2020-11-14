import products from '../products'

const initialState = {
  entities: [],
}

describe('products Reducer', () => {
  it('should has initialState', () => {
    const reducer = products(initialState)
    expect(reducer).toStrictEqual(initialState)
  })
})
