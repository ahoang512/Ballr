window.UserUtil = {
  updateUserPhoto : function(params) {
    $.ajax({
      url: "users/" + window.current_user,
      type: "PATCH",
      data: params,
      success : function (user){
        LandingActions.receiveUser(user);
      }
    });
  },

  fetchRandomUsers : function () {
    $.ajax({
      url : "/users",
      type: "GET",
      success : function(users){
        LandingActions.receiveFeaturedUsers(users.users);
      }
    });
  }
};
