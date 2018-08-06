import React, { Component } from 'react'
import RegisterForm from './register-form'

class App extends Component {

  state = {
    registered: false,
  }

  onRegistered = () => this.setState({
    registered: true,
  })

  renderRegistrationComplete = () => <div>
    <h2>Your account has been registered!</h2>
    <p>That is all for this example. In the next episode in the series we will add React Router (v4) and set up this example to have a log in page as well, and when you log in, we will get back an authorization token and save it on the client (this app) so that you can access special pages that are protected by the log in process!</p>
  </div>
  
  render() {
    const { registered } = this.state
    return <div className="container">
      {
        registered
          ? this.renderRegistrationComplete()
          : <RegisterForm registrationComplete={this.onRegistered} />
      }
    </div>
  }
}

export default App
