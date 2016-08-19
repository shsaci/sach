import React from 'react'
import TimerMixin from 'react-timer-mixin'
import request from 'superagent'

import Header from './Header'
import LogoBar from './LogoBar'
import Business from './Business'

export default React.createClass({
  mixins: [TimerMixin],
  componentDidMount () {
    // this.setInterval(() => {
    request
        .get('http://127.0.0.1:3000/')
        .end((err, res) => {
          if (err) {
            console.error(err.message)
            return
          }
          this.setState({
            abc: this.lbar(res.body),
            response: res.body
          })
        })
    // }, 3000)
  },

  lbar (obj) {
    let arrObj = [obj]
    let ob = arrObj
    .map(elem => {
      return {
        imageAddress: elem.logoImg,
        desc1: elem.des1,
        desc2: elem.des2,
        saying: elem.blurb
      }
    })
    // console.log(ob)
    // this.render(ob)
    this.test(ob)
    return ob
  },

  getInitialState () {
    return { response: [] }
  },

  test (obj) {
    return console.log(obj[0].imageAddress)
  },

  render () {
    // console.log(this.state.response.logoImg)
    // console.log(this.state.abc)
    return (
      <div className='app-container'>
        <Header />
        <LogoBar imgURL= {this.state.response.logoImg}/>
        <Business />
      </div>
    )
  }
})
