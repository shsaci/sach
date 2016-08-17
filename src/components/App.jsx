import React from 'react'

import Footer from './Footer'
import Header from './Header'

export default React.createClass({
  render () {
    return (
      <div className='app-container'>
        <Header />
        <Footer />
      </div>
    )
  }
})
