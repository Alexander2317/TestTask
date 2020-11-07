// @flow

import * as Yup from 'yup'

import { base } from '../../redux/constants'

import * as messages from './messages'

const fields = {
  nick: 'Nick',
  email: 'Email',
  name: 'Name',
  address: 'Address',
}

const schema: Object = Yup.object().shape({
  nick: Yup.string()
    .min(
      base.MIN_NICKNAME_LENGTH,
      messages.minLength({
        field: fields.nick,
        length: base.MIN_NICKNAME_LENGTH,
      }),
    )
    .max(
      base.MAX_NICKNAME_LENGTH,
      messages.maxLength({
        field: fields.nick,
        length: base.MAX_NICKNAME_LENGTH,
      }),
    )
    .required(messages.requiredField(fields.nick)),
  email: Yup.string()
    .email(messages.invalidField(fields.email))
    .required(messages.requiredField(fields.email)),
  name: Yup.string()
    .min(
      base.MIN_NAME_LENGTH,
      messages.minLength({
        field: fields.name,
        length: base.MIN_NAME_LENGTH,
      }),
    )
    .max(
      base.MAX_NAME_LENGTH,
      messages.maxLength({
        field: fields.name,
        length: base.MAX_NAME_LENGTH,
      }),
    )
    .required(messages.requiredField(fields.name)),
  address: Yup.string()
    .min(
      base.MIN_ADDRESS_LENGTH,
      messages.minLength({
        field: fields.address,
        length: base.MIN_ADDRESS_LENGTH,
      }),
    )
    .max(
      base.MAX_ADDRESS_LENGTH,
      messages.maxLength({
        field: fields.address,
        length: base.MAX_ADDRESS_LENGTH,
      }),
    )
    .required(messages.requiredField(fields.address)),
})

export default schema
