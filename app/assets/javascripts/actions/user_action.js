UserActions = {
  receiveCurrentUser : function (user){
    AppDispatcher.dispatch({
      actionType : UserConstants.CURRENT_USER_RECEIVED,
      user : user
    });
  },

  receiveFeaturedUsers : function (users) {
    AppDispatcher.dispatch({
      actionType : UserConstants.FEATURED_USERS_RECEIVED,
      users : users
    });
  }
};
