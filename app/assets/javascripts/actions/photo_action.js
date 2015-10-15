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
  }
};
