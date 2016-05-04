window.PhotoUtil = {
  fetchAlbumPhotos : function (albumId, selectedId){
    $.ajax({
      url: "api/photos",
      type: "GET",
      data: {photo : {albumId : albumId}},
      success : function (photos) {
        PhotoActions.receivePhotos(photos.photos, selectedId);
      }
    });
  },

  fetchFeedPhotos : function (sport){
    $.ajax({
      url: "api/photos/feed",
      type: "GET",
      data : {sport : sport},
      success : function (photos) {
        PhotoActions.receivePhotos(photos.photos);
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

  updatePhoto : function (photo){
    var params = {
      id : photo.id,
      photo: photo
    };
    
    $.ajax({
      url: "/api/photos/"+photo.id,
      type: "PATCH",
      data: photo,
      success : function(photo){
        PhotoActions.updatePhoto(photo);
      }
    });
  },

  fetchUserPhotos : function(){
    $.ajax({
      url: "api/photos/user_photos",
      type: "GET",
      success : function (photos) {
        PhotoActions.receivePhotos(photos.photos);
      }

    });
  },

};
