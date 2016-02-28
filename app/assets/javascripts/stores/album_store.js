(function(root) {
  'use strict';

  var CHANGE_EVENT = "album_changed";

  var _albums = [];
  var _albumSelected = 0;

  var resetAlbums = function (albums) {
    _albums = albums.slice();
    if (_albumSelected === 0){
      if (_albums.length > 0){
        _albumSelected = _albums[0].id;
      }
    }
  };

  var resetSelected = function (album_id){
    _albumSelected = album_id;
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
    selected : function() {
      return _albumSelected;
    },

    addChangeListener : function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
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
        case AlbumConstants.ALBUM_CLICKED:
          resetSelected(parseInt(action.album_id));
          root.AlbumStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

}(this));
