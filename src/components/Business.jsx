import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  propTypes: {
    blurbs: React.PropTypes.string,
    miniLogo: React.PropTypes.string
  },

  render () {
    return (
      <div className="business">

        <div className="row tweetbox">
          <img className="three columns minilogo" src= {this.props.miniLogo} alt="mini logo" />
          <p className="nine columns tweet">{this.props.blurbs}</p>
          </div>

          <div className="row action-buttons">
            <div className="one-third column"><Link to="/about"><img src="../images/reply.png" alt="reply" /></Link></div>
            <div className="one-third column"><a href="#"><img src="../images/retweet.png" alt="re-blurb" /></a></div>
            <div className="one-third column"><a href="#"><img src="../images/love1.jpg" alt="love" /></a></div>
          </div>
        </div>
    )
  }
})
