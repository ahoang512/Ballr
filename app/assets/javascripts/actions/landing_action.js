LandingActions = {
  receivePhotos : function (photos) {
    AppDispatcher.dispatch({
      actionType : LandingConstants.PHOTOS_RECEIVED,
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
