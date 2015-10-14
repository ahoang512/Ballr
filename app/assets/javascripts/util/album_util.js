window.AlbumUtil = {
  fetchUserAlbums : function (){
    $.ajax({
      url: "api/albums",
      type: "GET",
      success : function (albums) {
        AlbumActions.receiveAllAlbums(albums);
      }
    });
  },
  createAlbum : function(name) {
    var params = {album : {
      name : name
    }};

    $.post('api/albums', params, function(album){
      AlbumActions.receiveNewAlbum(album);
    });
  },

  deleteAlbum : function (albumId) {
    $.ajax({
      url: "api/albums/" + albumId,
      type: "DELETE",
      success : function(album){
        AlbumActions.deleteAlbum(album);
      }
    });
  },





};
