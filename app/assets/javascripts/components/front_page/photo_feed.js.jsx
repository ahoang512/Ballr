var PhotoFeed = React.createClass({

  render : function () {
    return (
      <div className="photoFeed">
        <PhotoList photos={this.props.photos}/>
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
