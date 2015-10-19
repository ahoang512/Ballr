window.LandingUtil = {
  fetchRandomPhotos : function (){
    $.ajax({
      url: "api/photos/random",
      type: "GET",
      success : function (photos) {
        LandingActions.receivePhotos(photos.photos);
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

  fetchUserPhotos : function(){
    $.ajax({
      url: "api/photos/user_photos",
      type: "GET",
      success : function (photos) {
        LandingActions.receivePhotos(photos.photos);
      }

    });
  },

};
