import React from 'react'

export default React.createClass({
  propTypes: {
    description1: React.PropTypes.string,
    description2: React.PropTypes.string,
    blurbs: React.PropTypes.string
  },

  render () {
    return (
      <div className="business">

        <div className="row description-bar">
          <p>{this.props.description1}</p>

          <p>{this.props.description2}</p>
        </div>

        <div className="row categories">
          <div className="one-third column">Blurbs</div>
          <div className="one-third column">Images</div>
          <div className="one-third column">Likes</div>
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
