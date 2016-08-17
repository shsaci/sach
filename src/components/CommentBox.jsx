import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="comment-box">
        <textarea placeholder="Type your wombat comment here..." />
        <button>Add comment</button>
      </div>
    )
  }
})
