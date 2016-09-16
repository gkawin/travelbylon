import React from 'react'

import { Form, FormRow, FormInput, FormLabel } from '../form'
import './Login.styl'

const Login = ({ onChange }) => (
  <div className='login'>
    <div className='login__header'>
      <h1>Agent Login</h1>
    </div>
    <Form className='login__form'>
      <FormRow>
        <FormLabel>Username</FormLabel>
        <FormInput
          type='text'
          placeholder='example@mrhotel.co'
          onChange={onChange}
        />
      </FormRow>
      <FormRow>
        <FormLabel>Password</FormLabel>
        <FormInput
          type='password'
          placeholder='*******'
          onChange={onChange}
        />
      </FormRow>
    </Form>
  </div>
)

Login.propTypes = {
  onChange: React.PropTypes.func.isRequired,
}
export default Login
