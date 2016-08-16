import React from 'react'

export default React.createClass({
  getInitialState () {
    return {
      isLoggedIn: false
    }
  },

  componentDidMount () {
    this.setState({
      isLoggedIn: false
    })
  },

  renderLink () {
    if (!this.state.isLoggedIn) {
      return (
        <span className="login-links">
          <a href="login.html">Login</a> |
          <a href="register.html">Register</a>
        </span>
      )
    }
    return (
      <a href="logout.html">Logout</a>
    )
  },

  render () {
    return (
      <div>{this.renderLink()}</div>
    )
  }
})
