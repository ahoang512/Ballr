var Comments = React.createClass({
  //this.props.photo_id
  getInitialState : function () {
    return ({
      comments : []
    });
  },


  componentDidMount : function () {
    CommentStore.addChangeListener(this._onChange);
  },

  componentWillUnmount : function () {
    CommentStore.removeChangeListener(this._onChange);
  },

  _onChange : function () {
    this.setState({
      comments : CommentStore.all()
    });
  },

  render : function () {
    var comments = this.state.comments.map(function(comment){
      return (<Comment comment={comment} key={comment.id} />);
    });
    return (
      <div className="commentsContainer group">
        {comments}
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
    if(typeof window.current_user !== "undefined"){
      if(this.state.text !== ""){
        var params = {
          user_id : window.current_user,
          photo_id : this.props.photo_id,
          text : this.state.text
        }
        CommentUtil.createComment(params);
      }
    }else{
      window.location="/session/new";
    }
    this.setState({
      text : ""
    });
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
          <textarea placeholder="Add Comment" onChange={this._onChange} value={this.state.text}/>
          <button className="commentButton">Comment</button>
        </form>
      </div>
    )
  }
})



var Comment = React.createClass({
  // this.props.comment
  render : function () {
    var comment = this.props.comment;
    return (
      <div className="comment">
        <img src={comment.user_photo}/>
        <div>{comment.user_name}</div>
        <div>{comment.text}</div>
      </div>
    )
  }
});
