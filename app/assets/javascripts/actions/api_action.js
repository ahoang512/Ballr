ApiActions = {
  receiveAll : function (albums) {
    AppDispatcher.dispatch({
      actionType : AlbumConstants.ALBUM_RECEIVED,
      albums : album
    });
  },

  receiveNewAlbum : function(album) {
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUM_RECEIVED,
      album: album
    });
  }
};
