

var AlbumTileContainer = React.createClass({
  getInitialState : function(){
    return ({createNewAlbum: false,
       albums: AlbumStore.all(),
       albumSelected: 0});
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

  _albumClick : function (e) {
    var selectedId = e.target.id;
    this.setState({albumSelected : selectedId});
  },

  _onChange : function () {
    var selected = 0;
    if (this.state.albumSelected === 0){
      selected = AlbumStore.all()[0].id;
    }
    this.setState(
      {albums: AlbumStore.all(),
       createNewAlbum: false,
       albumSelected: selected});
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
        if (album.id === parseInt(this.state.albumSelected)){
          return (<li key={album.id} onClick={this._albumClick}
            id={album.id} className="selected">{album.name}</li>);
        }else{
          return (<li key={album.id} onClick={this._albumClick}
            id={album.id}>{album.name}</li>);
        }
      }.bind(this));

    if (!this.state.createNewAlbum){
      var content = (<ul className="albumList">{tiles}</ul>);
    }else{
      var content = form;
    }



    return (
      <div className="albumTileContainer">
        <div className="editLabels">Albums</div>
          {content}
        <NewAlbumButtons click={this._buttonClick}/>
      </div>
    )
  }
});

var NewAlbumButtons = React.createClass({
  render : function () {
    return (
      <div className="buttons">
        {/*still have to implement remove onclick*/}
        <div className= "albumButtons remove" >
          -
        </div>
        <div className= "albumButtons add" onClick={this.props.click}>
          +
        </div>
      </div>
    )
  }
});
