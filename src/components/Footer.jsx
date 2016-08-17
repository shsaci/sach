import React from 'react'

import Navigation from './Navigation'
import Search from './Search'

export default React.createClass({
  render () {
    return (
      <div>
        <hr />
        <Navigation type='footer' />
        <Search />
      </div>
    )
  }
})
