var EditAlbum = React.createClass({

  getInitialState : function () {
    return ({albumSelected : 0,
             photos : []});
  },

  componentWillMount : function () {
    AlbumUtil.fetchUserAlbums();
  },
  componentDidMount  : function (){
    PhotoStore.addChangeListener(this._onChange);
    AlbumStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    PhotoStore.removeChangeListener(this._onChange);
    AlbumStore.removeChangeListener(this._onChange);
  },

  _onChange : function () {
    this.setState({photoSelected : PhotoStore.photoSelected(),
                  photos : PhotoStore.all(),
                  albumSelected : AlbumStore.selected()
                });
  },

  render : function () {
    return (
      <div className="editAlbum">
        <div className="editContainer group">
          <AlbumTileContainer/>
          <PhotoTileContainer albumSelected={this.state.albumSelected}/>
        </div>

      </div>
    );
  }

});
