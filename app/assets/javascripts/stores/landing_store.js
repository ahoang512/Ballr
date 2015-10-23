(function(root) {
  'use strict';
  var CHANGE_EVENT = "landing_changed";
  var _photos = [];
  var _user = {};
  var _option = "personal";
  var _featuredUsers = [];

  var resetPhotos = function (photos) {
    _photos = photos.slice();
  };

  var resetFeaturedUsers = function (users) {
    _featuredUsers = users;
  };

  var updateUser = function (user) {
    _user = user;
  };

  var updateOption = function(option) {
    _option = option;
  };

  root.LandingStore = $.extend({}, EventEmitter.prototype, {
    all : function () {
      return _photos.slice();
    },
    // user : function () {
    //   return _user;
    // },
    option : function() {
      return _option;
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
        case LandingConstants.PHOTOS_RECEIVED:
          resetPhotos(action.photos);
          root.LandingStore.emit(CHANGE_EVENT);
          break;
        // case LandingConstants.USER_RECEIVED:
        //   updateUser(action.user);
        //   root.LandingStore.emit(CHANGE_EVENT);
        //   break;
        case LandingConstants.FEATURED_USERS_RECEIVED:
          resetFeaturedUsers(action.users);
          root.LandingStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
