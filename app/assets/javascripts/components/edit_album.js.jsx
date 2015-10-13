var EditAlbum = React.createClass({
  render : function () {
    return (
      <div>
        <span className="editLabel">Edit Your Albums</span>
        <div className="editContainer group">
          <AlbumTileContainer/>
          <PhotoTileContainer/>

        </div>
      </div>
    );
  }

});

// var UploadButton = React.createClass({
//
// })
