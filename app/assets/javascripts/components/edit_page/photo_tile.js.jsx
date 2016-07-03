var PhotoTile = React.createClass({
  //this.props.photo
  //this.props.photoSelected
  getInitialState : function() {
      return ({
        gif : false,
        hover : false,
        photo_url : "",
        frame_url : ""
      });
  },
  componentDidMount : function () {
    var photo = this.props.photo;
    var url = this.props.photo.url;
    this._updateState(photo, url);
  },

  componentWillReceiveProps : function (nextProps) {
    var photo = nextProps.photo;
    var url = nextProps.photo.url;
    this._updateState(photo,url);
  },

  _updateState : function (photo, url) {
    var ext = url.substr(url.length - 3);

    if (ext === "gif") {
      var frame_url = url.replace("gif", "jpg");
      this.setState({
        gif : true,
        photo_url : photo.url,
        frame_url : frame_url,
      });
    }else {
      this.setState({
        gif: false,
        photo_url : photo.url,
        frame_url : photo.url
      });
    }
  },

  _handleClick : function (e) {
    PhotoActions.photoClicked(parseInt(e.currentTarget.id));
  },

  _onMouseOver : function() {
    if (this.state.gif){
      this.setState({
        hover : true
      })
    }
  },
  _onMouseOut : function () {
    if (this.state.gif) {
      this.setState({
        hover : false
      });
    }
  },

  render : function () {
    var url = this.state.frame_url;
    var className = "photoTiles";
    var selected = "";
    var photo = this.props.photo;
    var photoSelected = this.props.photoSelected;
    if (photoSelected.id === photo.id){
      selected = "selected";
    }
    if (this.state.gif){
      className += " gif";
    }
    if (this.state.hover){
      url = this.state.photo_url;
    }


    return (
      <li key={photo.id}
          id = {photo.id}
          onClick={this._handleClick}
          className={selected}
          onMouseOver={this._onMouseOver}
          onMouseOut= {this._onMouseOut}>
          <img src={url}  className={className}/>
          <div className="group photoTileInfo">
              <h2>{photo.name}</h2>
          </div>
      </li>
    );
  }


});
