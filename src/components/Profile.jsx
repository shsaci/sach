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
        .get('http://127.0.0.1:3000/profile/form1')
        .end((err, res) => {
          if (err) {
            console.error(err.message)
            return
          }
          this.setState({
            jason: res.body[0],
            response: res.body
          })
          // console.log(this.state.jason)
        })
  },

  render () {
    const a = this.state.jason
    console.log(a[0])
    const ob = this.state.response.map((elem, i) => {
      return (
        <Business key={i} blurbs={elem.blurb}/>
        )
    })
    return (
      <div className='app-container'>
        <Header />
        <LogoBar imgURL= {a.logoImg} description1= {a.des1} description2={a.des2} />
        {ob}
      </div>
    )
  }
})
