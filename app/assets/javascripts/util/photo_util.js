window.PhotoUtil = {
  fetchAlbumPhotos : function (albumId, selectedId){
    $.ajax({
      url: "api/photos",
      type: "GET",
      data: {photo : {albumId : albumId}},
      success : function (photos) {
        PhotoActions.receiveAlbumPhotos(photos.photos, selectedId);
      }
    });
  },

  fetchRandomPhotos : function (){
    $.ajax({
      url: "api/photos/random",
      type: "GET",
      success : function (photos) {
        LandingActions.receivePhotos(photos.photos);
      }
    });
  },

  createPhoto : function (params){
    $.post('api/photos', params, function(photo){
      PhotoActions.receiveNewPhoto(photo);
    });
  },

  deletePhoto : function (photoId) {
    $.ajax({
      url: "api/photos/" + photoId,
      type: "DELETE",
      success : function(photo){
        PhotoActions.deletePhoto(photo);
      }
    });
  },

  editPhoto : function (photoId, newName){
    var params = {
      photoName : newName
    };
    $.ajax({
      url: "/api/photos/"+photoId,
      type: "PATCH",
      data: params,
      success : function(photo){
        PhotoActions.updatePhotoName(photo);
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
