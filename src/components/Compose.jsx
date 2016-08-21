import React from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'

export default React.createClass({
  getInitialState: function () {
    return {author: '', text: ''}
  },
  handleAuthorChange: function (e) {
    this.setState({author: e.target.value})
  },
  handleTextChange: function (e) {
    this.setState({text: e.target.value})
  },
  handleSubmit: function (e) {
    e.preventDefault()
    const author = this.state.author.trim()
    const text = this.state.text.trim()
    console.log(author, text)
    if (!text || !author) {
      return
    }
    this.postToServer(author, text)
    this.setState({author: '', text: ''})
  },
  postToServer: function (i, b) {
    const t = Date.now()
    request
    .post('http://127.0.0.1:3000/profile/form2')
    .send({ "blurb": b, "time": t })
    .end(function (err, res) {
      if (err || !res.ok) {
        console.error('Oh no! error')
      } else {
        console.log('yay got ' + (res.body))
      }
    })
  },

  render: function () {
    return (
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
          <input
            type="text"
            placeholder="Blurb something..."
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <input type="submit" value="Post" />
        </form>
      )
  }
})
