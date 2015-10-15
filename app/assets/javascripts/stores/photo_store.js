(function(root) {
  'use strict';



  var _photos = [];
  var _photoSelected = 0;

  var resetPhotos = function (photos) {
    _photos = photos.slice();
  };

  var addNewPhoto = function(photo) {
    _photos.push(photo);
  };

  var removePhoto = function (oldPhoto){
    var idx;
    _photos.find(function(photo,index){
      if (photo.id === oldPhoto.id){
        idx = index;
        return photo;
      }
    });
    if (idx !== -1){
      _photos.splice(idx,1);
    }
  };

  var updateSelected = function(photoId) {
    _photoSelected = photoId;
  };


  root.PhotoStore = $.extend({}, EventEmitter.prototype, {
    all : function () {
      return _photos.slice();
    },
    photoSelected : function () {
      return _photoSelected;
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
        case PhotoConstants.PHOTO_RECEIVED:
          addNewPhoto(action.photo);
          root.PhotoStore.emit(CHANGE_EVENT);
          break;
        case PhotoConstants.PHOTO_SELECTED:
          updateSelected(action.photoId);
          root.PhotoStore.emit(CHANGE_EVENT);
          break;
        case PhotoConstants.PHOTO_DELETED:
          removePhoto(action.photo);
          root.PhotoStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
