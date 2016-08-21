import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
      <div>
        <div className ="row head">
          <Link className="two columns home" to="/"><img src="../images/home.png" alt="home"/></Link>
          <button className="" type="button" name="button">Sign Up</button>
          <button className="" type="button" name="button">Login</button>
          <Link className="" to="/profile"><button>Profile</button></Link>
          <div className="row"></div>
          <div>{this.props.children}</div>
        </div>
      </div>
    )
  }
})
