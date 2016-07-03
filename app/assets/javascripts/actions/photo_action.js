PhotoActions = {
  receivePhotos : function (photos, selected_id) {
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

  updatePhoto : function (photo) {
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
    CommentUtil.fetchComments(id);
    AppDispatcher.dispatch ({
      actionType : PhotoConstants.TILE_CLICKED,
      id: id
    });
  },

  filterClicked : function (sport) {
    AppDispatcher.dispatch({
      actionType : PhotoConstants.FILTER_CLICKED,
      sport : sport
    });
    PhotoUtil.fetchFeedPhotos(sport);

  }

};
