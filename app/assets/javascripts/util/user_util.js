window.UserUtil = {
  updateUserPhoto : function(params) {
    $.ajax({
      url: "users/" + window.current_user,
      type: "PATCH",
      data: params,
      success : function (user){
        UserActions.receiveCurrentUser(user);
      }
    });
  },

  getCurrentUser : function() {
    $.ajax({
      url: "/users/"+window.current_user,
      type: "GET",
      success : function (user){
        UserActions.receiveCurrentUser(user.user);
      }
    });
  },

  fetchFeaturedUsers : function () {
    $.ajax({
      url : "/users",
      type: "GET",
      success : function(users){
        UserActions.receiveFeaturedUsers(users.users);
      }
    });
  }
};
