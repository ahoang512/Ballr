var EditAlbum = React.createClass({
  getInitialState : function () {
    return ({albumSelected : 0});
  },
  _updateSelected : function(albumId) {
    this.setState({albumSelected : albumId});
  },
  render : function () {
    return (
      <div className="editAlbum">
        <span className="editLabel">Edit Your Albums</span>
        <div className="editContainer group">
          <AlbumTileContainer updateSelected={this._updateSelected}/>
          <PhotoTileContainer/>
        </div>
        <div className="uploadRow">
          <UploadButton albumSelected= {this.state.albumSelected}/>
        </div>
      </div>
    );
  }

});


var UploadButton = React.createClass({
  _handleUpload : function (error,result) {
    var url = result[0].url;
    var filename = result[0].original_filename;
    var params = {
      photo : {
        "url" : url,
        "name" : filename,
        "album_id" : this.props.albumSelected
      }
    }
    PhotoUtil.createPhoto(params);

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
