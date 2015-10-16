var PhotoItem = React.createClass({
  render : function () {
    return (
      <li key={this.props.photo.id} className="photoItems">
        <img src={this.props.photo.url} className="feedPhotos"/>
        <PhotoInfo photo={this.props.photo}/>
      </li>
    );
  }
});

var PhotoInfo = React.createClass({
  render : function () {
    var photo = this.props.photo;
    var name = photo.name;
    var owner = photo.owner;
    var album = photo.album;


    return (
      <div className="photoInfo">
        <label className="name">{name}</label><br/>
        <label>{owner}</label><br/>
        <label>{album}</label>
      </div>
    )
  }
});
