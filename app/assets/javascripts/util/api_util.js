window.ApiUtil = {
  fetchAllAlbums : function (){
    $.ajax({
      url: "api/albums",
      type: "GET",
      success : function (albums) {
        ApiActions.receiveAllAlbums(albums);
      }
    });
  },
  createAlbum : function(name) {
    var params = {album : {
      name : name
    }};

    $.post('api/albums', params, function(album){
      ApiActions.receiveNewAlbum(album);
    });
  }

};
