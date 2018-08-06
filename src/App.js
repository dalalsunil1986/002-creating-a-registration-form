import React, { Component } from 'react'
import FormField from './form-field'

class App extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
  }

  handleChange = (e, attr) => {
    this.setState({
      [attr]: e.target.value,
    })
  }

  render() {
    const { fullName, email, password } = this.state

    return <form>
      <h1>Register today</h1>

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
        type='text'
        label='Password'
        value={password}
        handleChange={this.handleChange}
      />

      <div>
        <button>Sign up!</button>
      </div>
    </form>
  }
}

export default App
