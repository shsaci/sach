import React from 'react'

const Logo = props => {
  return (
    <div className="logo">
      <img src="images/poop.jpg" alt="POOP IS SQUARE" />
      <span className="title">{props.siteTitle}</span>
    </div>
  )
}

export default Logo
