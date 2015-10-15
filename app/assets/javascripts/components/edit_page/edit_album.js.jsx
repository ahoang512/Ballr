var EditAlbum = React.createClass({
  getInitialState : function () {
    return ({albumSelected : 0});
  },

  _updateSelected : function(albumId) {
    this.setState({albumSelected : albumId});
  },

  render : function () {
    var username = window.current_username + "'s";
    return (
      <div className="editAlbum">
        <span className="editLabel">{username} Library</span>
        <div className="editContainer group">
          <AlbumTileContainer updateSelected={this._updateSelected}/>
          <PhotoTileContainer/>
        </div>

      </div>
    );
  }

});
