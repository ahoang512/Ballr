var PhotoInfo = React.createClass({
  render : function () {
    var photo = this.props.photo;
    var name = photo.name;
    var owner = photo.owner;
    var album = photo.album;
    var owner_url = photo.owner_url;

    return (

      <div className="photoInfo">
        <img src={owner_url}></img>
        <div className="name photoLink">{owner}</div>
        <div>
          <div className="photoName photoLink">{name}</div>
          <div className="photoAlbum photoLink">{album}</div>
        </div>
      </div>
    )
  }
});
