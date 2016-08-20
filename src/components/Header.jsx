import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
      <div>
        <div className ="row head">
          <Link className="three columns home" to="/">Home</Link>
          <span className="five columns headerbar">Header Bar</span>
          <Link className="three columns profile" to="/profile">Profile</Link>
          </div>
         <div className="row top">
              <button className="one-half column" type="button" name="button">Sign Up</button>

              <button className="one-half column" type="button" name="button">Login</button>
        </div>
      </div>
    )
  }
})
