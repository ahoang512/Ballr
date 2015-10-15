var EditAlbum = React.createClass({
  getInitialState : function () {
    return ({albumSelected : 0,
             photoSelected : PhotoStore.photoSelected()});
  },

  _updateAlbumSelected : function(albumId) {
    //not flux way of doing it
    //come back and make an action that triggers
    this.setState({albumSelected : albumId});
  },

  componentDidMount  : function (){
    PhotoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    PhotoStore.addChangeListener(this._onChange);
  },

  _onChange : function () {
    this.setState({photoSelected : PhotoStore.photoSelected()});
  },

  render : function () {
    var username = window.current_username + "'s";
    return (
      <div className="editAlbum">
        <span className="editLabel">{username} Library</span>
        <div className="editContainer group">
          <AlbumTileContainer updateSelected={this._updateAlbumSelected}/>
          <PhotoTileContainer photoSelected={this.state.photoSelected}/>
        </div>

      </div>
    );
  }

});
