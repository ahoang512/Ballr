var PhotoStream = React.createClass({
  //this.props.photos
  //this.props.selected
  //this.props.album
  mixins: [ ReactRouter.State ],
  getInitialState : function() {
    return ({selected : parseInt(this.props.selected)});
  },

  componentWillMount : function () {
    PhotoUtil.fetchAlbumPhotos(this.props.album,
      this.props.selected
    );
  },
  componentDidMount : function () {
    PhotoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount : function () {
    PhotoStore.removeChangeListener(this._onChange);
  },

  _onChange : function () {
    this.setState({selected : parseInt(PhotoStore.showSelected())});
  },


  _findIndex : function (id) {
    var idx;
    this.props.photos.find(function(photo,index){
      if (photo.id === id){
        idx = index;
      }
    });
    return idx;
  },

  _onClick : function (e) {
    var idx = this._findIndex(this.state.selected);
    switch (e.target.textContent){
      case "←":
        PhotoActions.iterateClicked(-1, idx);
        break;
      case "→":
        PhotoActions.iterateClicked(1, idx);
        break;
    }
  },

  _imgClick : function(e) {
    CommentUtil.fetchComments(e.target.id);
    PhotoActions.photoTileClicked(parseInt(e.target.id));
  },


  render : function () {
    var photos = this.props.photos;
    var img;
    if (photos.length !== 0 && this.state.selected > 0){
      var idx = this._findIndex(this.state.selected);
      if (typeof idx !== "undefined"){
        var url = photos[idx].url;
        img = (<img src={url}></img>);
      }
    }
    return (
      <div className="photoStream">
        <div className="stream group">
          <div className="change" onClick={this._onClick}>&#8592;</div>
          <div className="photo">
              {img}
          </div>
          <div className="change" onClick={this._onClick}>&#8594;</div>
        </div>
        <div className="albumPhotos">
          <div className="albumPhotosContainer">
            {
              this.props.photos.map(function(photo){
                if (photo.id === this.state.selected){
                  return (
                    <div>
                      <img src={photo.url} onClick={this._imgClick} id={photo.id} className="tileSelected"/>;
                    </div>
                  );
                }else {
                  return (
                    <div>
                      <img src={photo.url} onClick={this._imgClick} id={photo.id}/>
                    </div>
                  );
                }
              }.bind(this))
            }
          </div>
        </div>
      </div>
    );
  }
});
