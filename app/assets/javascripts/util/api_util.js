window.ApiUtil = {
  createAlbum : function(name) {
    var params = {album : {
      name : name
    }};

    $.post('api/albums', params, function(album){
      ApiActions.receiveNewAlbum(album);
    });
  }

};
