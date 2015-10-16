var PhotoFeed = React.createClass({
  getInitialState : function () {
    return ({
      photos : LandingStore.all()
    });
  },

  componentDidMount : function() {
    LandingUtil.fetchRandomPhotos();
    LandingStore.addChangeListener(this._onChange);
  },

  componentWillUnmount : function () {
    LandingStore.removeChangeListener(this._onChange);
  },

  _onChange : function () {
    this.setState({photos : LandingStore.all()});
  },

  render : function () {
    return (
      <div className="photoFeed">
        <PhotoList photos={this.state.photos}/>
      </div>
    );
  }
});

var PhotoList = React.createClass({
  //this.props.photos
  render : function() {
    var photos = this.props.photos.map(function (photo) {
      return (<PhotoItem photo ={photo}/>);

    }.bind(this))

    return (
      <ul>
        {photos}
      </ul>

    );
  }
});
