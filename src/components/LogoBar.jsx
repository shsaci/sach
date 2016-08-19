import React from 'react'

export default React.createClass({
  propTypes: {
    imgURL: React.PropTypes.string
  },

  render () {
    return (
      <div className="row logo-bar">
        <img src= {this.props.imgURL} alt="Logo bar" />
      </div>
    )
  }
})
