import React, { Component } from 'react'
import FormField from '../form-field'
import FormErrors from '../form-errors'
import registerUser from './register-user'

class RegisterForm extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    errors: null,
    registered: false,
  }

  handleChange = (e, attr) => {
    this.setState({
      [attr]: e.target.value,
    })
  }

  submitForm = () => {
    const { fullName, email, password } = this.state
    registerUser(fullName, email, password)
    .then(response => response.json())
    .then(json => {
      if (json.errors) {
        this.setState({ errors: json.errors })
        return
      }

      this.props.registrationComplete()
    })
  }

  render() {
    const { fullName, email, password, errors } = this.state

    return <form
      className="register-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <h1>Sign up today!</h1>

      { errors ? <FormErrors errors={errors} /> : null }

      <FormField
        attr='fullName'
        type='text'
        label='Full name'
        value={fullName}
        handleChange={this.handleChange}
      />

      <FormField
        attr='email'
        type='text'
        label='Email'
        value={email}
        handleChange={this.handleChange}
      />

      <FormField
        attr='password'
        type='password'
        label='Password'
        value={password}
        handleChange={this.handleChange}
      />

      <hr />

      <button
        type="button"
        className="blue"
        onClick={this.submitForm}
      >Register</button>
    </form>
  }
}

export default RegisterForm
