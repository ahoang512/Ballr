ApiActions = {
  receiveAll : function (albums) {
    AppDispatcher.dispatch({
      actionType : AlbumConstants.ALBUM_RECEIVED,
      albums : album
    });
  }
};
