var Comments = React.createClass({

  getInitialState : function () {
    return ({
    });
  },



  render : function () {
    return (
      <div className="commentsContainer">
        <Comment/>
        <NewComment photo_id={this.props.photo_id}/>
      </div>
    );
  }
});

var NewComment = React.createClass({
  getInitialState : function() {
    return ({
      text : ""
    })
  },

  _handleSubmit : function(e) {
    e.preventDefault();
    var params = {
      user_id : window.current_user,
      photo_id : this.props.photo_id,
      text : this.state.text
    }
    CommentUtil.createComment(params);
  },

  _onChange : function(e) {
    this.setState({
      text: e.target.value
    });

  },

  render: function () {
    return (
      <div className="newCommentContainer group">
        <form onSubmit={this._handleSubmit}>
          <textarea placeholder="Add Comment" onChange={this._onChange}/>
          <button className="commentButton">Comment</button>
        </form>
      </div>
    )
  }
})



var Comment = React.createClass({
  render : function () {
    return (
      <div className="comment">
      </div>
    )
  }
});
