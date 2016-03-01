window.CommentUtil = {
  createComment : function (params) {
    $.post('api/comments', params, function(comment){
      CommentActions.receiveNewComment(comment.comment);
    });
  },

  fetchComments : function (photo_id) {
    $.ajax({
      url: "api/comments",
      type: "GET",
      data:  {photo_id: photo_id},
      success : function (comments){
        CommentActions.receiveComments(comments.comments);
      }
    });
  }
};
