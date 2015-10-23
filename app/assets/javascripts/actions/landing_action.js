LandingActions = {
  receivePhotos : function (photos) {
    AppDispatcher.dispatch({
      actionType : LandingConstants.PHOTOS_RECEIVED,
      photos : photos
    });
  },


  // 
  // receiveFeaturedUsers : function (users) {
  //   AppDispatcher.dispatch({
  //     actionType : LandingConstants.FEATURED_USERS_RECEIVED,
  //     users : users
  //   });
  // }


};
