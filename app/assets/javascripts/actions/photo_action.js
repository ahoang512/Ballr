PhotoActions = {
  receiveAlbumPhotos : function (photos, selected_id) {
    var args = {
      photos : photos,
      selected : selected_id
    };
    AppDispatcher.dispatch({
      actionType : PhotoConstants.PHOTOS_RECEIVED,
      args : args
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
  },

  photoClicked : function(id) {
    AppDispatcher.dispatch({
      actionType : PhotoConstants.PHOTO_CLICKED,
      id : id
    });
  },

  iterateClicked : function (dir, idx) {
    var args= {
      dir : dir,
      idx : idx
    };
    AppDispatcher.dispatch({
      actionType : PhotoConstants.ITERATE_CLICKED,
      args : args
    });
  },

  photoTileClicked : function (id) {
    AppDispatcher.dispatch ({
      actionType : PhotoConstants.TILE_CLICKED,
      id: id
    });
  }

};
