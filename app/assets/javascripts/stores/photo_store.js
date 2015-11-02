(function(root) {
  'use strict';

  var CHANGE_EVENT = "photos_changed";

  var _photos = [];
  var _photoSelectedId = 0;
  var _photoSelected = {};
  var _editSelected = 0;
  var _showSelected = 0;
  var _photoFeed = [];
  var _photo;
  var _status = "unselected";

  var resetPhotos = function (photos) {
    _photos = photos.slice();
  };



  var addNewPhoto = function(photo) {
    _photos.push(photo);
  };

  var removePhoto = function (oldPhoto){
    var idx;
    _photos.find(function(photo,index){
      if (photo.photo_id === oldPhoto.id){
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
      if (photo.photo_id === updatedPhoto.photo_id){
        idx = index;
        return;
      }
    });
    if (idx !== -1){
      _photos[idx] = updatedPhoto;
    }
  };

  var updateSelected = function(photoId) {
    _photoSelectedId = photoId;
  };

  var updateEditSelected = function(id) {
    _editSelected  = id;
  };

  var updateShowSelected = function (dir, idx) {
    var next = dir + idx;
    if (next >= _photos.length) {
      next = 0;
    }else if(next < 0) {
      next = _photos.length-1;
    }
    _showSelected = _photos[next].photo_id;
  };

  var setShowSelected = function (selected) {
    _showSelected = selected;
  };

  var resetPhotoSelected = function(id){
    if (id === _photoSelected.photo_id){
      _photoSelected = {};
      _status = "unselected";
      return;
    }
    for (var i = 0; i < _photos.length; i++) {
      if(_photos[i].photo_id === id){
        _photoSelected = _photos[i];
      }
      _status = "selected";
    }
  };


  root.PhotoStore = $.extend({}, EventEmitter.prototype, {
    all : function () {
      return _photos.slice();
    },
    photoSelectedId : function () {
      return _photoSelectedId;
    },
    editSelected : function () {
      return _editSelected;
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
