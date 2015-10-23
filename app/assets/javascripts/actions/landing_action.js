LandingActions = {
  receivePhotos : function (photos) {
    AppDispatcher.dispatch({
      actionType : LandingConstants.PHOTOS_RECEIVED,
      photos : photos
    });
  },

  // receiveUser : function (user){
  //   AppDispatcher.dispatch({
  //     actionType : LandingConstants.USER_RECEIVED,
  //     user : user
  //   });
  // },

  receiveFeaturedUsers : function (users) {
    AppDispatcher.dispatch({
      actionType : LandingConstants.FEATURED_USERS_RECEIVED,
      users : users
    });
  }


};
