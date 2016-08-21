import React from 'react'
import request from 'superagent'
import Synonym from './Synonym'

export default React.createClass({
  propTypes: {
    words: React.PropTypes.string.isRequired
  },

  getInitialState () {
    return {
      words: []
    }
  },

  handleRequest (evt) {
    const word = evt.currentTarget ? evt.currentTarget.value : this.state.content
    request
      .post(`http://127.0.0.1:3000/profile/form2`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        } else {
          const checkSyn = JSON.parse(res.text)
          console.log(checkSyn)
          this.setState({words: checkSyn})
        }
      }
      )
  },

  inputNode: null,

  handleInput(evt) {
    this.setState({content: this.inputNode.value})
  },

  handleKeypress(evt) {
    if(evt.keyCode !== 13) {
      return
    }
    this.handleRequest(evt)
  },

  render () {
    return(
      <div>
        <form>
          <input ref={(node) => this.inputNode = node} type="text" name="Word" placeholder="Enter your blurb here" onChange={this.handleInput} onKeyUp={this.handleKeypress}
            />
            <br />
          <input type="button" value="Submit" onClick={this.handleRequest} />
        </form>

        <div>
          {this.state.words.map((word, i) => <Synonym word={word} key={i} />)}
        </div>
      </div>
    )
  }
})
