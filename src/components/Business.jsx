import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="business">

        <div className="row description-bar">
          <p>Description: Lorem ipsum dolor sit amet</p>

          <p>Great Britain Formula1.com</p>

        </div>

        <div className="row categories">
          <div className="one-third column">Blurbs</div>
          <div className="one-third column">Images</div>
          <div className="one-third column">Likes</div>
        </div>

        <div className="row tweet">
          <h5>My first Blurb is this. Its a very long blurb simply because its my first blurb. That is just the way I am. You got it</h5>
          <div className="row action-buttons">
            <div className="one-third column"><a href="#"><img src="http://placekitten.com/g/130/30" alt="reply" /></a></div>
            <div className="one-third column"><a href="#"><img src="../images/retweet.png" alt="Re-blurb" /></a></div>
            <div className="one-third column">Love</div>
          </div>
        </div>
      </div>
    )
  }
})
