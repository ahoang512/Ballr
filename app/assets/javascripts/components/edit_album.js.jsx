var EditAlbum = React.createClass({
  render : function () {
    return (
      <div className="editAlbum">
        <span className="editLabel">Edit Your Albums</span>
        <div className="editContainer group">
          <AlbumTileContainer/>
          <PhotoTileContainer/>
        </div>
        <div className="uploadRow">
          <UploadButton/>
        </div>
      </div>
    );
  }

});


var UploadButton = React.createClass({
  render : function() {
    return (
      <div className="uploadButton">
        Upload
      </div>
    );
  }
})
