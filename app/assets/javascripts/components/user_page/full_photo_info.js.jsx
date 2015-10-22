var FullPhotoInfo = React.createClass({
  getInitialState : function () {
    return ({photoSelected : 0,
             photos : [],
             albums : []
           });
  },

  componentDidMount : function () {
    PhotoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount : function () {
    PhotoStore.removeChangeListener(this._onChange);
  },

  _onChange : function () {
    this.setState({
      photoSelected : parseInt(PhotoStore.showSelected()),
      photos : PhotoStore.all()
    });
  },

  _findPhoto : function () {
    return this.state.photos.find(function(photo){
      if (photo.photo_id === this.state.photoSelected){
        return photo;
      }
    }.bind(this));
  },

  render : function () {
    var selected = this.state.photoSelected;
    var photos = this.state.photos;
    if (selected > 0 && photos.length>0){
      var photo = this._findPhoto();
      var img = (<img src={photo.owner_url} className="photoOwner"/>);
      var username = <div>{photo.owner}</div>
      var name = photo.name;
      var albumName = photo.album;
    }
    return (
      <div className="fullPhotoInfoContainer">
        <div className="fullPhotoInfo">
          <div className="userData">
            {img}
            {username}
          </div>
          <div>
            <h2>{name}</h2>
            <h3>album: {albumName}</h3>
          </div>
        </div>
      </div>
    );
  }
});