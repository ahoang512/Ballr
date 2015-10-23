window.ApiUtil = {
  destroySession : function () {
    $.ajax({
      url : "/session",
      type : "DELETE",
      success : function (user) {
        window.location="/";
      }
    });
  },

  getCurrentUser : function() {
    $.ajax({
      url: "/users/"+window.current_user,
      type: "GET",
      success : function (user){
        LandingActions.receiveUser(user.user);
      }
    });
  },

};
