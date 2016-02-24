var Comments = React.createClass({
  getInitialState : function () {
    return ({
    });
  },



  render : function () {
    var addComment = false;

    if (this.state.newComment !== "Add Comment"){
      addComment = true;
    }
    return (
      <div className="commentsContainer">
        <Comment/>
        <NewComment/>
      </div>
    );
  }
});

var NewComment = React.createClass({
  render: function () {
    return (
      <div className="newCommentContainer group">
        <textarea placeholder="Add Comment"/>
        <button className="commentButton">Comment</button>
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
