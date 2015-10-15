window.PhotoUtil = {
  fetchAlbumPhotos : function (albumId){
    $.ajax({
      url: "api/photos",
      type: "GET",
      data: {photo : {albumId : albumId}},
      success : function (photos) {
        PhotoActions.receiveAlbumPhotos(photos);
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
};
