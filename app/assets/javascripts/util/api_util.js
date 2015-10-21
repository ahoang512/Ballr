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

  guestlogin : function () {
    $.ajax({
      url : "/session",

    });
  },

};
