import React from 'react'

export default React.createClass({
  propTypes: {
    imgURL: React.PropTypes.string,
    description1: React.PropTypes.string,
    description2: React.PropTypes.string
  },

  render () {
    return (
      <div>
      <div className="row logo-bar">
        <img src= {this.props.imgURL} alt="Logo bar" />
      </div>
      <div className="row description-bar">
        <p>{this.props.description1}</p>

        <p>{this.props.description2}</p>
      </div>
    </div>
    )
  }
})
