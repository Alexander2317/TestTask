// @flow

export const requiredField = (field: string): string => `${field} is required`

export const invalidField = (field: string): string => `${field} is invalid`

type CheckLengthProps = {
  field: string,
  length: number,
}

export const minLength = ({ field, length }: CheckLengthProps): string =>
  `${field} shouldn't be less than ${length} symbols`

export const maxLength = ({ field, length }: CheckLengthProps): string =>
  `${field} shouldn't be more than ${length} symbols`
