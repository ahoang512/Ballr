(function(root) {
  'use strict';

  var CHANGE_EVENT = "album_changed";

  var _albums = [];

  var resetAlbums = function (albums) {
    _albums = albums.slice();
  };

  var addNewAlbum = function (album) {
    _albums.push(album);
  };

  root.AlbumStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _albums.slice();
    },

    addChangeListener : function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    dispatcherId: AppDispatcher.register(function(action){
      switch (action.actionType) {
        case AlbumConstants.ALBUMS_RECEIVED:
          resetAlbums(action.albums);
          root.AlbumStore.emit(CHANGE_EVENT);
          break;
        case AlbumConstants.ALBUM_RECEIVED:
          addNewAlbum(action.album);
          root.AlbumStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

}(this));
