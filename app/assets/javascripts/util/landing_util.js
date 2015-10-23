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
