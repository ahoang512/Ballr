window.LandingUtil = {
  fetchRandomPhotos : function (){
    $.ajax({
      url: "api/photos/random",
      type: "GET",
      success : function (photos) {
        LandingActions.receiveRandomPhotos(photos);
      }
    });
  },
};
