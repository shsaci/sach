import React from 'react'
import request from 'superagent'

import Header from './Header'
import LogoBar from './LogoBar'
import Business from './Business'

export default React.createClass({
  componentDidMount () {
    request
        .get('http://127.0.0.1:3000/')
        .end((err, res) => {
          if (err) {
            console.error(err.message)
            return
          }
          this.setState({
            jason: this.makeObj(res.body),
            response: res.body
          })
        })
  },

  makeObj (obj) {
    let arrObj = [obj]
    let ob = arrObj
    .map(elem => {
      return {
        logoUrl: elem.logoImg,
        desc1: elem.des1,
        desc2: elem.des2,
        saying: elem.blurb
      }
    })
    const resObj = ob[0]
    console.log(resObj)
    return resObj
  },

  constructBusiness () {
    const a = this.state.jason.saying
    console.log(a)
    return (
      <Business description1={this.state.jason.desc1} description2={this.state.jason.desc2}
      blurbs={this.state.jason.saying}
        />
    )
  },

  getInitialState () {
    return {
      jason: {},
      response: {}
    }
  },

  render () {
    this.constructBusiness()
    return (
      <div className='app-container'>
        <Header />
        <LogoBar imgURL= {this.state.jason.logoUrl}/>
        {this.constructBusiness()}
      </div>
    )
  }
})
