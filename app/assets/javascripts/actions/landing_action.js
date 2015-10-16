LandingActions = {
  receiveRandomPhotos : function (photos) {
    AppDispatcher.dispatch({
      actionType : LandingConstants.RANDOMS_RECEIVED,
      photos : photos
    });
  },

  receiveUser : function (user){
    AppDispatcher.dispatch({
      actionType : LandingConstants.USER_RECEIVED,
      user : user
    });
  }
};
