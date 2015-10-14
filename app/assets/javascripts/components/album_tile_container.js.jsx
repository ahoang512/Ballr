

var AlbumTileContainer = React.createClass({
  getInitialState : function(){
    return ({createNewAlbum: false });
  },
  _buttonClick : function () {
    console.log("click");
    this.setState({createNewAlbum: true});
  },
  _handleSubmit : function (e) {
    ApiUtil.createAlbum(e.target[0].value);
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

    if (!this.state.createNewAlbum){
      var middle = (<div className="albumTiles"></div>);
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
      <div >
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
