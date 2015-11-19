(function(root) {
  'use strict';

  var CHANGE_EVENT = "photos_changed";

  var _photos = [];
  var _photoSelected = {};
  var _showSelected = 0;
  var _photoFeed = [];
  var _photo;
  var _status = "unselected"
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




  var updateShowSelected = function (dir, idx) {
    var next = dir + idx;
    if (next >= _photos.length) {
      next = 0;
    }else if(next < 0) {
      next = _photos.length-1;
    }
    _showSelected = _photos[next].id;
  };

  var setShowSelected = function (selected) {
    _showSelected = selected;
  };

  var resetPhotoSelected = function(id){
    if (id === _photoSelected.id){
      _photoSelected = {};
      _status = "unselected";
      return;
    }
    for (var i = 0; i < _photos.length; i++) {
      if(_photos[i].id === id){
        _photoSelected = _photos[i];
      }
      _status = "selected";
    }
  };


  root.PhotoStore = $.extend({}, EventEmitter.prototype, {
    all : function () {
      return _photos.slice();
    },

    showSelected : function () {
      return _showSelected;
    },
    photoSelected : function () {
      return _photoSelected;
    },
    status : function () {
      return _status;
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
          resetPhotos(action.args.photos);
          setShowSelected(action.args.selected);
          root.PhotoStore.emit(CHANGE_EVENT);
          break;
        case PhotoConstants.PHOTO_RECEIVED:
          addNewPhoto(action.photo);
          root.PhotoStore.emit(CHANGE_EVENT);
          break;
        case PhotoConstants.PHOTO_DELETED:
          removePhoto(action.photo);
          root.PhotoStore.emit(CHANGE_EVENT);
          break;
        case PhotoConstants.PHOTO_EDITED:
          updatePhoto(action.photo);
          resetPhotoSelected(action.photo.id);
          root.PhotoStore.emit(CHANGE_EVENT);
          break;
        case PhotoConstants.ITERATE_CLICKED:
          updateShowSelected(action.args.dir, action.args.idx);
          root.PhotoStore.emit(CHANGE_EVENT);
          break;
        case PhotoConstants.TILE_CLICKED:
          setShowSelected(action.id);
          root.PhotoStore.emit(CHANGE_EVENT);
          break;
        case PhotoConstants.PHOTO_CLICKED:
          resetPhotoSelected(action.id);
          root.PhotoStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
