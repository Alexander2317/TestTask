import { requiredField, invalidField, minLength, maxLength } from '../messages'

describe('messages', () => {
  it('requiredField', () => {
    expect(requiredField('Email')).toBe('Email is required')
  })

  it('invalidField', () => {
    expect(invalidField('Email')).toBe('Email is invalid')
  })

  it('minLength', () => {
    expect(minLength({ field: 'Nick', length: 5 })).toBe(
      `Nick shouldn't be less than 5 symbols`,
    )
  })

  it('maxLength', () => {
    expect(maxLength({ field: 'Nick', length: 5 })).toBe(
      `Nick shouldn't be more than 5 symbols`,
    )
  })
})
