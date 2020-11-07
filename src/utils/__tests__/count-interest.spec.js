import countInterest from '../count-interest'

describe('countInterest', () => {
  it('check correct interest', () => {
    expect(countInterest({ value: 100, percent: 1 })).toBe('1.00')
  })
})
