var PhotoTileContainer = React.createClass({
  //this.props.albumSelected
  //this.props.photos
  getInitialState : function () {
    return ({editSelected : PhotoStore.editSelected(),
             mode: "unselected",
            photoSelected : {},
            photos : []});
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
                  photoSelected : PhotoStore.photoSelected(),
                         photos : PhotoStore.all()});
  },
  _handleClick : function (e) {
    PhotoActions.photoClicked(parseInt(e.currentTarget.id));
  },

  render : function (){
    var photoTileInfo;
    if(typeof this.state.photos !== 'undefined'){
      var tiles =
        this.state.photos.map(function(photo){
          var photoTileInfo = (
            <div className="group photoTileInfo">
                <h2>{photo.name}</h2>
            </div>
          );
          if (this.state.photoSelected.id === photo.id){
            return (<li key={photo.id}
                        id={photo.id}
                        onClick={this._handleClick}
                        className="selected">
                      <img src={photo.url}  className="photoTiles"/>
                      {photoTileInfo}

                    </li>);
          }else {
            return (<li key={photo.id} id={photo.id} onClick={this._handleClick}>
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
  _handleSubmit : function (e) {
    var newName = e.target[0].value;
    var newSport = e.target[1].value;
    var photo = {
      id: this.props.photo.id,
      photo : {
        name : newName,
        sport : newSport
      }
    }
    PhotoUtil.updatePhoto(photo)

  },
  render : function () {
    var photo = this.state.photo;
    return (
      <div className="editPhotoDetails">
        <form onSubmit = {this._handleSubmit}>
          <label>
            Name
            <input type="text" defaultValue={photo.name}/>
          </label>
          <label>Sport
            <select defaultValue={photo.sport}>
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
    PhotoUtil.deletePhoto(this.props.photoSelected.id);
  },
  render : function() {
    return (
      <div className="deleteButton" id="deleteButton" onClick={this._onClick}>
        Delete
      </div>
    );
  }
})
