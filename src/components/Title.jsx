import React from 'react'

import Subject from './Subject'
import Upvote from './Upvote'

export default React.createClass({
  render () {
    return (
      <div>
        <Upvote />
        <Subject text="As it turns out wombat poop is round after all..." />
      </div>
    )
  }
})
