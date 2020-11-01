// @flow

import * as React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import Button from '@material-ui/core/Button'
import { TextField } from 'formik-material-ui'

import { constants } from '../../../../redux'

const AddUserForm = () => (
  <Formik
    initialValues={{
      email: '',
      name: '',
      address: '',
    }}
    validate={(values) => {
      const errors = {}
      if (!values.email) {
        errors.email = 'Email is required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address'
      }

      if (!values.name) {
        errors.name = 'Name is required'
      }
      if (!values.address) {
        errors.address = 'Address is required'
      }

      return errors
    }}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false)
      console.info(values)
    }}
  >
    {({ submitForm, isSubmitting }) => (
      <Form>
        <Field component={TextField} type="email" name="email" label="Email" />
        <br />
        <Field component={TextField} type="text" name="name" label="Name" />
        <br />
        <Field
          component={TextField}
          type="text"
          name="address"
          label="Address"
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          onClick={submitForm}
        >
          Save
        </Button>
        &nbsp;&nbsp;
        <Button component={LinkRouter} to={constants.routes.home}>
          Cancel
        </Button>
      </Form>
    )}
  </Formik>
)

export default AddUserForm
