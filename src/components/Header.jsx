import React from 'react'

import Logo from './Logo'
import Login from './Login'
import Navigation from './Navigation'

export default React.createClass({
  render () {
    return (
      <div>
        <Logo siteTitle="Wombat News" />
        <Navigation />
        <Login />
      </div>
    )
  }
})
