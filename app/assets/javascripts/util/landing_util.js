window.LandingUtil = {
  fetchRandomPhotos : function (){
    $.ajax({
      url: "api/photos/random",
      type: "GET",
      success : function (photos) {
        LandingActions.receiveRandomPhotos(photos.photos);
      }
    });
  },

  getCurrentUser : function() {
    $.ajax({
      url: "/users/"+window.current_user,
      type: "GET",
      success : function (user){
        LandingActions.receiveUser(user);
      }
    });
  },
};
