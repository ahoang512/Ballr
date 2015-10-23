(function(root) {
  var CHANGE_EVENT = "users_changed";

  var _currentUser = {};
  var _featuredUsers = [];

  var resetFeaturedUsers = function (users) {
    _featuredUsers = users;
  };

  var updateCurrentUser = function (user) {
    _currentUser = user;
  };

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    currentUser : function () {
      return _currentUser;
    },

    featuredUsers : function () {
      return _featuredUsers.slice();
    },

    addChangeListener : function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function(action){
      switch (action.actionType){
        case UserConstants.CURRENT_USER_RECEIVED:
          updateCurrentUser(action.user);
          root.UserStore.emit(CHANGE_EVENT);
          break;
        case "":
          break;

      }
    })


  });


})(this);
