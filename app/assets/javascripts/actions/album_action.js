AlbumActions = {
  receiveAllAlbums : function (albums) {
    AppDispatcher.dispatch({
      actionType : AlbumConstants.ALBUMS_RECEIVED,
      albums : albums
    });
  },

  receiveNewAlbum : function(album) {
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUM_RECEIVED,
      album: album
    });
  },

  deleteAlbum : function(album){
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUM_DELETED,
      album: album
    });
  }
};