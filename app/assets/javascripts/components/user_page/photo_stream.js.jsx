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
    switch (e.target.className){
      case "change l":
        PhotoActions.iterateClicked(-1, idx);
        break;
      case "change r":
        PhotoActions.iterateClicked(1, idx);
        break;
    }
  },

  render : function () {
    var photos = this.props.photos;
    var img;
    if (photos.length !== 0 && this.state.selected > 0){
      var idx = this._findIndex(this.state.selected);
      if (typeof idx !== "undefined"){
        var url = photos[idx].url;
        img = (<img src={url} className="image"></img>);
      }
    }
    return (
      <div className="photoStream group">
        <div className="stream group">
          <div className="change l group" onClick={this._onClick}>
            <span className="left"></span>
          </div>
          <div className="photo">
              {img}
              <div id="albumPhotos">
                <ul className="albumPhotosContainer">
                  {
                    this.props.photos.map(function(photo){
                      return (<AlbumTab photo={photo}
                                        selected = {this.state.selected}
                              />)
                    }.bind(this))
                  }
                </ul>
              </div>
          </div>
          <div className="change r" onClick={this._onClick}>
          <span className="right"></span>
          </div>

        </div>
      </div>
    );
  }
});
