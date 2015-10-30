var EditAlbum = React.createClass({

  getInitialState : function () {
    return ({albumSelected : 0,
             photoSelectedId : PhotoStore.photoSelectedId(),
             photoSelected : PhotoStore.photoSelected(),
             photos : []});
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
    PhotoStore.removeChangeListener(this._onChange);
  },

  _onChange : function () {
    this.setState({photoSelectedId : PhotoStore.photoSelectedId(),
                  photoSelected : PhotoStore.photoSelected(),
                  photos : PhotoStore.all()});
  },

  render : function () {

    var username = window.current_username + "'s";
    return (
      <div className="editAlbum">
        <div className="editContainer group">
          <AlbumTileContainer updateSelected={this._updateAlbumSelected}/>
          <PhotoTileContainer photoSelectedId={this.state.photoSelectedId}
                              albumSelected={this.state.albumSelected}
                              photoSelected={this.state.photoSelected}
                              photos={this.state.photos}/>
        </div>

      </div>
    );
  }

});
