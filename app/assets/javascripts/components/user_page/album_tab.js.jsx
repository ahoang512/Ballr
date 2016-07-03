var AlbumTab = React.createClass({
  //this.props.photo
  //this.props.selected
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

  _onClick : function(e) {
    // CommentUtil.fetchComments(e.target.id);
    PhotoActions.photoTileClicked(parseInt(e.target.id));
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
    var className= "";
    var url = this.state.frame_url;
    var photo= this.props.photo;
    if (this.state.gif){
      className += " gif";
    }
    if (photo.id === this.props.selected){
      className += " tileSelected";
    }
    if (this.state.hover){
      url = this.state.photo_url;
    }
    return (
      <li>
        <img src={url} onClick={this._onClick}
                       id={photo.id}
                       className={className}
                       onMouseOver={this._onMouseOver}
                       onMouseOut= {this._onMouseOut}
                      />;
      </li>
    );
  }
});
