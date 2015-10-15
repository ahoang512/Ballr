(function(root) {
  'use strict';
  var CHANGE_EVENT = "landing_changed";
  var _photos = [];

  var resetPhotos = function (photos) {
    _photos = photos.slice();
  };

  root.LandingStore = $.extend({}, EventEmitter.prototype, {
    all : function () {
      return _photos.slice();
    },
    addChangeListener : function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherId: AppDispatcher.register(function(action){
      switch (action.actionType){
        case LandingConstants.RANDOMS_RECEIVED:
          resetPhotos(action.photos);
          root.LandingStore.emit(CHANGE_EVENT);
        break;
      }
    })
  });

}(this));
