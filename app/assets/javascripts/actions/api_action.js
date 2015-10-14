ApiActions = {
  receiveAll : function (albums) {
    AppDispatcher.dispatch({
      actionType : AlbumConstants.ALBUM_RECEIVED,
      albums : album
    });
  },

  receiveNewAlbum : function(newBench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.NEW_BENCH_RECEIVED,
      bench: newBench
    });
  }
};
