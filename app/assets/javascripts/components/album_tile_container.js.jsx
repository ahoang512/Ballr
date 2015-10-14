

var AlbumTileContainer = React.createClass({
  getInitialState : function(){
    return ({createNewAlbum: false, albums: AlbumStore.all()});
  },
  componentDidMount : function () {
    ApiUtil.fetchAllAlbums();
    AlbumStore.addChangeListener(this._onChange);
  },
  _buttonClick : function () {
    this.setState({createNewAlbum: true});
  },
  _handleSubmit : function (e) {
    ApiUtil.createAlbum(e.target[0].value);
  },

  _onChange : function () {
    this.setState(
      {albums: AlbumStore.all(),
       createNewAlbum: false});
  },

  render : function () {

    var form = (
      <form className="albumForm" onSubmit={this._handleSubmit}>
        <label> New Album Name
          <input type="text"/>
          <input type="submit"/>
        </label>
      </form>
    );

    var tiles =
      this.state.albums.map(function(album){
        return (<li>{album.name}</li>);
      });

    if (!this.state.createNewAlbum){
      var middle = (<ul className="albumList">{tiles}</ul>);
    }else{
      var middle = form;
    }



    return (
      <div className="albumTileContainer">
        <div className="editLabels">Albums</div>
          {middle}
        <AlbumButtons click={this._buttonClick}/>
      </div>
    )
  }
});

var AlbumButtons = React.createClass({
  render : function () {
    return (
      <div className="buttons">
        <div className= "albumButtons remove" onClick={this.props.click}>
          -
        </div>
        <div className= "albumButtons add" onClick={this.props.click}>
          +
        </div>
      </div>
    )
  }
});
