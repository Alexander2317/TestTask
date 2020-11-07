// @flow

import EmailValidator from 'email-validator'

import { base } from '../redux/constants'

const validateFormSchema = (values: Object): Object => {
  const errors = {}

  if (!values.nick) {
    errors.nick = 'Nickname is required'
  }
  if (values.nick.length > base.MAX_NICKNAME_LENGTH) {
    errors.nick = `Nickname shouldn't be more ${base.MAX_NICKNAME_LENGTH} symbols`
  }
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!EmailValidator.validate(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.name) {
    errors.name = 'Name is required'
  }
  if (!values.address) {
    errors.address = 'Address is required'
  }

  return errors
}

export default validateFormSchema
