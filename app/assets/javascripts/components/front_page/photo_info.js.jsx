var PhotoInfo = React.createClass({
  render : function () {
    var photo = this.props.photo;
    var name = photo.name;
    var owner = photo.owner;
    var album = photo.album;
    var owner_url = photo.owner_url;
    var album_icon = "http://res.cloudinary.com/dayd3nm4v/image/upload/v1447356028/black_album_icon_mxfp9t.png"
    return (

      <div className="photoInfo">
        <img src={owner_url}></img>
        <div className="name photoLink">{owner}</div>
        
        <div>
          <div className="photoName photoLink">{name}</div>
          <div className="photoAlbum photoLink">
            {album}
            <img src={album_icon}/>
          </div>
        </div>
      </div>
    )
  }
});
