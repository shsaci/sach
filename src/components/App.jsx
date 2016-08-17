import React from 'react'

import CommentBox from './CommentBox'
import Footer from './Footer'
import Header from './Header'

export default React.createClass({
  render () {
    return (
      <div className='app-container'>
        <Header />
        <CommentBox />
        <Footer />
      </div>
    )
  }
})
