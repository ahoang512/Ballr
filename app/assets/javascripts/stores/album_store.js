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

  var removeAlbum = function (oldAlbum){
    var idx;
    _albums.find(function(album,index){
      if (album.id === oldAlbum.id){
        idx = index;
        return album;
      }
    });
    if (idx !== -1){
      _albums.splice(idx,1);
    }
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
        case AlbumConstants.ALBUM_DELETED:
          removeAlbum(action.album);
          root.AlbumStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

}(this));
