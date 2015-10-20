window.ApiUtil = {
  destroySession : function () {
    $.ajax({
      url : "/session",
      type : "DELETE",
      success : function (user) {
        // window.location.assign("http://ballrapp.herokuapp.com/");
        window.location.assign("http://localhost:3000/");
      }
    });
  },

};
