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

//http://res.cloudinary.com/dayd3nm4v/image/upload/c_scale,w_618/v1444771996/obj_vto9gv.jpg

var UploadButton = React.createClass({
  _handleUpload : function (error,result) {
    var url = result[0].url
    console.log(error, result)
  },
  _onClick : function () {
    cloudinary.openUploadWidget(
      { cloud_name: 'dayd3nm4v',
        upload_preset: 'xwgzpiek'},
        this._handleUpload
    );
  },
  render : function() {
    return (
      <div className="uploadButton" onClick={this._onClick}>
        Upload
      </div>
    );
  }
})
