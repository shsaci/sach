import React from 'react'

getInitialState: function() {
  return {data: []};
},
componentDidMount: function() {
  this.loadCommentsFromServer();
  setInterval(this.loadCommentsFromServer, this.props.pollInterval);
},
render: function() {
  return (
    <div className="commentBox">
      <h1>Comments</h1>
      <CommentList data={this.state.data} />
      <CommentForm onCommentSubmit={this.handleCommentSubmit} />
    </div>
  );
}
});

var CommentList = React.createClass({
render: function() {
  var commentNodes = this.props.data.map(function(comment) {
    return (
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>
    );
  });
  return (
    <div className="commentList">
      {commentNodes}
    </div>
  );
}
});

var CommentForm = React.createClass({
getInitialState: function() {
  return {author: '', text: ''};
},
handleAuthorChange: function(e) {
  this.setState({author: e.target.value});
},
handleTextChange: function(e) {
  this.setState({text: e.target.value});
},
handleSubmit: function(e) {
  e.preventDefault();
  var author = this.state.author.trim();
  var text = this.state.text.trim();
  if (!text || !author) {
    return;
  }
  this.props.onCommentSubmit({author: author, text: text});
  this.setState({author: '', text: ''});
}

export default React.createClass({
  render () {
    return (
      <div>
        <h4>Compose Blurb</h4>
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              value={this.state.author}
              onChange={this.handleAuthorChange}
            />
            <input
              type="text"
              placeholder="Say something..."
              value={this.state.text}
              onChange={this.handleTextChange}
            />
            <input type="submit" value="Post" />
          </form>
      </div>
    )
  }
})
