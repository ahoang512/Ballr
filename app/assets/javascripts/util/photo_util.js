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
  }
};
