var PhotoTileContainer = React.createClass({
  //this.props.albumSelected
  getInitialState : function () {
    return ({mode: "unselected",
            photoSelected : {},
            photos : []});
  },
  componentDidMount : function () {
    PhotoStore.addChangeListener(this._onChange);
    AlbumStore.addChangeListener(this._onChange);

  },
  componentWillUnmount: function(){
    PhotoStore.removeChangeListener(this._onChange);
    AlbumStore.removeChangeListener(this._onChange);
  },

  _onChange : function () {
    this.setState({mode  : PhotoStore.status(),
                  photoSelected : PhotoStore.photoSelected(),
                         photos : PhotoStore.all()});
  },
  _handleClick : function (e) {
    PhotoActions.photoClicked(parseInt(e.currentTarget.id));
  },

  render : function (){
    var state = this.state.mode === 'selected';

    if(this.state.photos.length !== 0){
      var tiles =
        this.state.photos.map(function(photo){
          if (this.state.photoSelected.id === photo.id){
            var selected = "selected";
          }else{
            var selected = "";
          }
          return (<li key={photo.id}
                      id={photo.id}
                      onClick={this._handleClick}
                      className={selected}>

                    <img src={photo.url}  className="photoTiles"/>
                    <div className="group photoTileInfo">
                        <h2>{photo.name}</h2>
                    </div>

                  </li>);
        }.bind(this));
    }

    return (
      <div className="photoTileContainer">
        <div className="group"><label className="photoLabel">Photos</label>
          <div className="photoButtons group">
            <DeleteButton photoSelected= {this.state.photoSelected}/>
            <UploadButton albumSelected= {this.props.albumSelected}/>
          </div>
        </div>
        <ul className="group photoList">
          {tiles}
        </ul>
        {state ? <EditPhotoDetails photo={this.state.photoSelected}/> : {}}
      </div>
    );
  }
});



var EditPhotoDetails = React.createClass({
  getInitialState : function () {
    return ({
      sport : this.props.photo.sport,
      name : this.props.photo.name
    })
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

  componentWillReceiveProps : function (nextProps) {
    this.setState({
      sport : nextProps.photo.sport,
      name : nextProps.photo.name,
    });
  },

  _sportChange : function (e) {
    this.setState({
      sport : e.target.value,
    });
  },
  _nameChange : function (e) {
    this.setState({
      name : e.target.value,
    });
  },

  render : function () {
    return (
      <div className="editPhotoDetails">
        <form onSubmit = {this._handleSubmit}>
          <div>Edit Photo Information</div>
          <label>
            Name
            <input type="text" value={this.state.name} onChange={this._nameChange}/>
          </label>
          <label>Sport
            <select value={this.state.sport} onChange={this._sportChange}>
              <option value="none">none</option>
              <option value="Football">Football</option>
              <option value="Basketball">Basketball</option>
              <option value="Baseball">Baseball</option>
              <option value="Hockey">Hockey</option>
              <option value="Soccer">Soccer</option>
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
  _onClick : function (e) {
    if (confirm("Are you sure you want to delete this photo?")){
      PhotoUtil.deletePhoto(this.props.photoSelected.id);
    }
  },
  render : function() {
    return (
      <div className="deleteButton" id="deleteButton" onClick={this._onClick}>
        Delete
      </div>
    );
  }
})
