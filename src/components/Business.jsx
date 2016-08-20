import React from 'react'

export default React.createClass({
  propTypes: {
    blurbs: React.PropTypes.string
  },

  render () {
    return (
      <div className="business">

        <div className="row categories">
          <div className="one-third column"><a href='#'>Blurbs</a></div>
          <div className="one-third column"><a href='#'>Images</a></div>
          <div className="one-third column"><a href='#'>Likes</a></div>
        </div>

        <div className="row tweet">
          <h5>{this.props.blurbs}</h5>
          <div className="row action-buttons">
            <div className="one-third column"><a href="#"><img src="../images/reply.png" alt="reply" /></a></div>
            <div className="one-third column"><a href="#"><img src="../images/retweet.png" alt="re-blurb" /></a></div>
            <div className="one-third column"><a href="#"><img src="../images/love1.jpg" alt="love" /></a></div>
          </div>
        </div>
      </div>
    )
  }
})
