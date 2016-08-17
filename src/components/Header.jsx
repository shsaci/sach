import React from 'react'

export default React.createClass({
  render () {
    return (
      <div>
        <div className ="head"> ----HeaderBar----</div>
         <div className="row top">
           <div className="one-half column">
              <button type="button" name="button">Sign Up</button>

              <button type="button" name="button">Login</button>
          </div>
        </div>
      </div>
    )
  }
})
