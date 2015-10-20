PhotoActions = {
  receiveAlbumPhotos : function (photos) {
    AppDispatcher.dispatch({
      actionType : PhotoConstants.PHOTOS_RECEIVED,
      photos : photos
    });
  },
  receiveNewPhoto : function(photo) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_RECEIVED,
      photo: photo
    });
  },

  updateSelected : function(photoId) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_SELECTED,
      photoId: photoId
    });
  },

  deletePhoto : function(photo){
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_DELETED,
      photo: photo
    });
  },

  editPhotoPressed: function(id){
    AppDispatcher.dispatch({
      actionType: PhotoConstants.EDIT_PHOTO_PRESSED,
      id: id
    });
  },

  updatePhotoName : function (photo) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_EDITED,
      photo: photo
    });
  }

};
