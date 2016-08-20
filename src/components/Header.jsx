import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
      <div>
        <div className ="row head">
          <Link className="three columns home" to="/">Home</Link>
          <button className="button three columns" type="button" name="button">Sign Up</button>
          <button className="button three columns" type="button" name="button">Login</button>
          <Link className="two columns profile" to="/profile">Profile</Link>
        </div>
      </div>
    )
  }
})
