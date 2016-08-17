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
      },
      footerLinks: {
        'Guidelines': 'https://google.co.nz',
        'FAQ': 'https://google.co.nz',
        'Support': 'https://google.co.nz',
        'API': 'https://google.co.nz',
        'Security': 'https://google.co.nz',
        'Lists': 'https://google.co.nz'
      }
    }
  },

  renderLink (link, linkText, key) {
    return (
      <a key={key} href={linkText}>{link}</a>
    )
  },

  render () {
    let type = 'links'
    if (this.props.type === 'footer') {
      type = 'footerLinks'
    }
    return (
      <nav>{Object.keys(this.state[type]).map((link, i) => {
        return this.renderLink(link, this.state[type][link], i)
      })}</nav>
    )
  }
})
