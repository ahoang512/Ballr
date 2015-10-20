(function(root) {
  'use strict';

  var CHANGE_EVENT = "photos_changed"

  var _photos = [];
  var _photoSelected = 0;
  var _editSelected = 0;

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

  var updatePhoto = function (updatedPhoto) {
    var idx;
    _photos.find(function(photo,index){
      if (photo.id === updatedPhoto.id){
        idx = index;
        return;
      }
    });
    if (idx !== -1){
      _photos[idx] = updatedPhoto;
    }
  };

  var updateSelected = function(photoId) {
    _photoSelected = photoId;
  };

  var updateEditSelected = function(id) {
    _editSelected  = id;
  };


  root.PhotoStore = $.extend({}, EventEmitter.prototype, {
    all : function () {
      return _photos.slice();
    },
    photoSelected : function () {
      return _photoSelected;
    },
    editSelected : function () {
      return _editSelected;
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
        case PhotoConstants.EDIT_PHOTO_PRESSED:
          updateEditSelected(action.id);
          root.PhotoStore.emit(CHANGE_EVENT);
          break;
        case PhotoConstants.PHOTO_EDITED:
          updatePhoto(action.photo);
          updateEditSelected(0);
          root.PhotoStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
