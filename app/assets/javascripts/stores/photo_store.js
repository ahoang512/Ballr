(function(root) {
  'use strict';

  var CHANGE_EVENT = "photos_changed";

  var _photos = [];

  var resetPhotos = function (photos) {
    _photos = photos.slice();
  };

  var addNewPhoto = function(photo) {
    _photos.push(photo);
  };

  root.PhotoStore = $.extend({}, EventEmitter.prototype, {
    all : function () {

    },
    addChangeListener : function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherId: AppDispatcher.register(function(action){
      switch (action.actionType){
        case PhotoConstants.PHOTOS_RECEIVED:
          resetPhotos(action.photos);
          root.PhotoStore.emit(CHANGE_EVENT);
          break;
        case PhotoConstants.PHOTOS_RECEIVED:
          addNewPhoto(action.photo);
          root.PhotoStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
