var EditAlbum = React.createClass({

  getInitialState : function () {
    return ({albumSelected : 0,
             photos : []});
  },

  componentDidMount  : function (){
    PhotoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    PhotoStore.removeChangeListener(this._onChange);
  },

  _onChange : function () {
    this.setState({photoSelected : PhotoStore.photoSelected(),
                  photos : PhotoStore.all()});
  },

  render : function () {

    var username = window.current_username + "'s";
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
