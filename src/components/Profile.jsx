import React from 'react'

import request from 'superagent'

import Header from './Header'
import LogoBar from './LogoBar'
import Business from './Business'

export default React.createClass({
  getInitialState () {
    return {
      jason: [],
      response: []
    }
  },

  componentDidMount () {
    request
        .get('http://127.0.0.1:3000/')
        .end((err, res) => {
          if (err) {
            console.error(err.message)
            return
          }
          this.setState({
            jason: res.body[0],
            response: res.body[0]
          })
          // console.log(this.state.response)
        })
  },

  render () {
    const a = this.state.response
    console.log(a)
    return (
      <div className='app-container'>
        <Header />
        <LogoBar imgURL= {a.logoImg} description1= {a.des1} description2={a.des2} />
        <Business />
      </div>
    )
  }
})
