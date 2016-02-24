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
      return (<Comment comment={comment} />);
    });
    return (
      <div className="commentsContainer">
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
      var params = {
        user_id : window.current_user,
        photo_id : this.props.photo_id,
        text : this.state.text
      }
      CommentUtil.createComment(params);
    }else{
      alert("Please Log In");
    }
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
