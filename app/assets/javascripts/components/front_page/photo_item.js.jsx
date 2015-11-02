var PhotoItem = React.createClass({
  mixins : [ReactRouter.History],

  _onClick : function () {
    var photo = this.props.photo;
    var url = "photos/" + photo.owner;
    var userId = photo.owner_id;
    var albumId = photo.album_id;
    var query = {
      user_id : userId,
      album_id : albumId,
      id : photo.id
    };

    PhotoUtil.fetchAlbumPhotos(albumId,
      photo.id
    );
    this.history.pushState({}, url, query);
  },

  render : function () {
    return (
      <li key={this.props.photo.id} className="photoItems" onClick={this._onClick}>
        <img src={this.props.photo.url} className="feedPhotos"/>
        <PhotoInfo photo={this.props.photo}/>
      </li>
    );
  }
});
