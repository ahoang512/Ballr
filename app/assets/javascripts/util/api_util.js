ApiUtil = {
  destroySession : function () {
    $.ajax({
      url : "/session",
      type : "DELETE",
      success : function (user) {
        window.location.assign("ballrapp.herokuapp.com/");
      }
    });
  }
};
