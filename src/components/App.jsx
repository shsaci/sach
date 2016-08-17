import React from 'react'

import CommentBox from './CommentBox'
import Footer from './Footer'
import Header from './Header'
import Title from './Title'

export default React.createClass({
  render () {
    return (
      <div className='app-container'>
        <Header />
        <Title />
        <CommentBox />
        <Footer />
      </div>
    )
  }
})
