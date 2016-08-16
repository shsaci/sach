import React from 'react'

export default React.createClass({
  getInitialState () {
    return {
      links: {
        'news': 'https://google.co.nz',
        'comments': 'https://google.co.nz',
        'show': 'https://google.co.nz',
        'ask': 'https://google.co.nz',
        'jobs': 'https://google.co.nz',
        'submit': 'https://google.co.nz'
      }
    }
  },

  renderLink (link, linkText) {
    return (
      <a href={linkText}>{link}</a>
    )
  },

  render () {
    return (
      <nav>{Object.keys(this.state.links).map((link) => {
        return this.renderLink(link, this.state.links[link])
      })}</nav>
    )
  }
})
