var PhotoItem = React.createClass({
  mixins : [ReactRouter.History],
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



  _onClick : function () {
    var photo = this.props.photo;
    var url = "photos/" + photo.owner;
    var userId = photo.owner_id;
    var albumId = photo.album_id;
    var query = {
      user_id : userId,
      album_id : albumId,
      photo_id : photo.id
    };

    PhotoUtil.fetchAlbumPhotos(albumId,
      photo.id
    );
    CommentUtil.fetchComments(this.props.photo.id);
    this.history.pushState({}, url, query);
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
    var className = "feedPhotos";

    if (this.state.hover){
      url = this.state.photo_url;
    }
    if (this.state.gif){
      className= "feedPhotos gif";
    }


    return (
      <li key={this.props.photo.id} className="photoItems"
        onClick={this._onClick}
        onMouseOver={this._onMouseOver}
        onMouseOut= {this._onMouseOut}>
        <img src={url} className={className}/>
        <PhotoInfo photo={this.props.photo}/>
      </li>
    );
  }
});
