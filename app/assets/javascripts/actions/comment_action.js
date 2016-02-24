CommentActions = {
  receiveNewComment : function(comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment : comment
    });
  },

  receiveComments : function (comments){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments : comments
    });
  }


};
