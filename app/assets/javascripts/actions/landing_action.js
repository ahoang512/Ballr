LandingActions = {
  receiveRandomPhotos : function (photos) {
    AppDispatcher.dispatch({
      actionType : LandingConstants.RANDOMS_RECEIVED,
      photos : photos
    });
  }
};
