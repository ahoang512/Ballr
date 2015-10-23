LandingActions = {
  receivePhotos : function (photos) {
    AppDispatcher.dispatch({
      actionType : LandingConstants.PHOTOS_RECEIVED,
      photos : photos
    });
  },




};
