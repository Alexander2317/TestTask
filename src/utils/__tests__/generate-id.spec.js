import generateId from '../generate-id'

describe('generateId', () => {
  it('should return number', () => {
    expect(typeof generateId()).toBe('number')
  })
})
