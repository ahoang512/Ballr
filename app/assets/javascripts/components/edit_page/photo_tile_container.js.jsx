var PhotoTileContainer = React.createClass({
  //this.props.albumSelected
  //this.props.photos
  getInitialState : function () {
    return ({editSelected : PhotoStore.editSelected(),
             mode: "unselected",
            photoSelected : {}});
  },
  componentDidMount : function () {
    PhotoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    PhotoStore.removeChangeListener(this._onChange);
  },

  _onChange : function () {
    this.setState({editSelected : PhotoStore.editSelected(),
                          mode  : PhotoStore.status(),
                  photoSelected : PhotoStore.photoSelected()});
  },
  _handleClick : function (e) {
    PhotoActions.photoClicked(parseInt(e.currentTarget.id));
    // PhotoActions.updateSelected(parseInt(e.currentTarget.id));
    // this.setState({mode: PhotoStore.status()});
  },
  _handleSubmit : function (e) {
    var newName = e.target[0].value;
    var id = parseInt(e.target[0].id);
    PhotoUtil.editPhoto(id, newName);
  },

  render : function (){
    var photoTileInfo;
    if(typeof this.props.photos !== 'undefined'){
      var tiles =
        this.props.photos.map(function(photo){
          if (photo.photo_id !== this.state.editSelected){
            photoTileInfo = ( <div className="group photoTileInfo">
                <h2>{photo.name}</h2>
                <EditNameButton photo={photo}/>
              </div>
            );
          }else {
            photoTileInfo = ( <div className="group photoTileInfo">
              <form onSubmit={this._handleSubmit}>
                <input type="text" className="editName" defaultValue={photo.name} id={photo.photo_id}/>
                <input type="submit" />
              </form>
              </div>
            );
          }
          if (this.state.photoSelected.photo_id === photo.photo_id){
            return (<li key={photo.photo_id}
                        id={photo.photo_id}
                        onClick={this._handleClick}
                        className="selected">
                      <img src={photo.url}  className="photoTiles"/>
                      {photoTileInfo}

                    </li>);
          }else {
            return (<li key={photo.photo_id} id={photo.photo_id} onClick={this._handleClick}>
                      <img src={photo.url}  className="photoTiles"/>
                      {photoTileInfo}
                    </li>);
          }
        }.bind(this));
    }

    return (
      <div className="photoTileContainer">
        <div className="group"><label className="photoLabel">Photos</label>
          <div className="photoButtons group">
            <DeleteButton photoSelected= {this.state.photoSelected}
                          albumSelected= {this.props.albumSelected}/>
            <UploadButton albumSelected= {this.props.albumSelected}/>
          </div>
        </div>
        <ul className="group photoList">
          {tiles}
        </ul>
        {this.state.mode === 'selected' ?
          <EditPhotoDetails photo={this.state.photoSelected}/>
          :
          {}}
      </div>
    );
  }
});



var EditPhotoDetails = React.createClass({
  getInitialState : function () {
    return ({photo : PhotoStore.photoSelected()});
  },
  render : function () {
    var photo = this.state.photo;
    return (
      <div className="editPhotoDetails">
        <form>
          <label>
            Name
            <input type="text" defaultValue={photo.name}/>
          </label>
          <label>Category
            <select>
              <option value="none">none</option>
              <option value="nfl">NFL</option>
              <option value="nba">NBA</option>
              <option value="tennis">TENNIS</option>
              <option value="mlb">MLB</option>
              <option value="nhl">NHL</option>
              <option value="mls">MLS</option>
              <option value="worldsoccer">World Soccer</option>
              <option value="tennis">Tennis</option>
            </select>
          </label>
          <input type="submit" value="Update"/>
        </form>
      </div>
    )
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
      <div className="uploadButton" id="uploadButton" onClick={this._onClick}>
        Upload
      </div>
    );
  }
})


var DeleteButton = React.createClass({
  //this.props.albumSelected
  _onClick : function (e) {
    PhotoUtil.deletePhoto(this.props.photoSelected.photo_id);
  },
  render : function() {
    return (
      <div className="deleteButton" id="deleteButton" onClick={this._onClick}>
        Delete
      </div>
    );
  }
})

var EditNameButton = React.createClass({
  //this.props.photo
  _handleClick : function (e) {
    var id = this.props.photo.photo_id;
    PhotoActions.editPhotoPressed(id);
  },
  render : function () {
    return (
      <div className="editButton" onClick={this._handleClick}>
        Edit
      </div>
    )
  }
});
