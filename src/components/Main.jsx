import React from 'react'
import {Link} from 'react-router'

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
    .get('http://127.0.0.1:3000/home')
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      this.setState({
        jason: res.body,
        response: res.body
      })
      console.log(this.state.jason)
    })
  },

// render () {
//     return (
//       <div>
//         <body>
//           <Link to="/">Home</Link>
//           <Link to="/profile">Profile</Link>
//         </body>
//         {this.props.children}
//       </div>
//     )
//   }
// }),

  render () {
    const a = this.state.jason
    console.log(a)
    const ob = this.state.jason.map((elem, i) => {
      return (
        <Business key={i} blurbs={elem.blurb}/>
        )
    })
    return (
      <div className='app-container'>
        <Header />
        {ob}
      </div>
    )
  }
})
