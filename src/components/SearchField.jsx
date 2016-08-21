import React from 'react'
import request from 'superagent'
import Synonym from './Synonym'

export default React.createClass({
  propTypes:{
    words: React.PropTypes.array.isRequired
  },

  getInitialState(){
    return {
      words: []
    }
  },

  handleRequest (evt) {
    const word = evt.currentTarget ? evt.currentTarget.value : this.state.content
    request
      .get(`http://words.bighugelabs.com/api/2/99b9e9de9f7b91269a3fd82d037b9068/${word}/json`)
      .end ((err, res) => {
        if (err) {
          console.error(err.message)
          return
        } else {

          const checkSyn = JSON.parse(res.text)
          let arr = []
          if (checkSyn.hasOwnProperty('noun')) {
            arr = arr.concat(checkSyn.noun.syn)
          }
          if (checkSyn.hasOwnProperty('verb')) {
            arr = arr.concat(checkSyn.verb.syn)
          }
          this.setState({words: arr})
        }
      })
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
          <input ref={(node) => this.inputNode = node} type="text" name="Word" placeholder="Enter your word here" onChange={this.handleInput} onKeyUp={this.handleKeypress}
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
