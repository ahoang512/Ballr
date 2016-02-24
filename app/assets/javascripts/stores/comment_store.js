(function(root) {
  'use strict';

  var CHANGE_EVENT = "comments_changed";

  var _comments = [];

  var addNewComment = function(comment) {
    _comments.push(comment);
  };

  var resetComments = function(comments){
    _comments = comments;
  };

  root.CommentStore= $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _comments.slice();
    },
    addChangeListener : function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId : AppDispatcher.register(function(action){
      switch (action.actionType){
        case CommentConstants.COMMENT_RECEIVED:
          addNewComment(action.comment);
          root.CommentStore.emit(CHANGE_EVENT);
          break;
        case CommentConstants.COMMENTS_RECEIVED:
          resetComments(action.comments);
          root.CommentStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
}(this));
