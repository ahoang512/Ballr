var FullPhotoInfo = React.createClass({
  getInitialState : function () {
    return ({photoSelected : 0,
             photos : []});
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
    this.state.photos.find(function(photo){
      if (photo.photo_id === this.state.photoSelected){
        
      }
    });
  },

  render : function () {

    return (
      <div className="fullPhotoInfoContainer">
        <div className="fullPhotoInfo">
          <div>
            <img/>
          </div>
        </div>
      </div>
    );
  }
});
