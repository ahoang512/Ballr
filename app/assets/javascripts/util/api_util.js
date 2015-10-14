window.ApiUtil = {
  createAlbum : function(name) {
    $.post('/api/albums', {album : name}, function(album){
      ApiActions.receiveAll(album);
    });
  }

};
