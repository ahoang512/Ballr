var PhotoTileContainer = React.createClass({
  //this.props.photoSelected
  getInitialState : function () {
    return ({photos : PhotoStore.all()});
  },
  componentDidMount : function () {
    PhotoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    PhotoStore.removeChangeListener(this._onChange);
  },

  _onChange : function () {
    this.setState({photos : PhotoStore.all()});
  },
  _handleClick : function (e) {
    PhotoActions.updateSelected(parseInt(e.currentTarget.id));
  },
  render : function (){

    var tiles =
      this.state.photos.map(function(photo){
        if (this.props.photoSelected === photo.id){
          return (<li key={photo.id}
                      id={photo.id}
                      onClick={this._handleClick}
                      className="selected">
                    <img src={photo.url}  className="photoTiles"/>
                  </li>);
        }else {
          return (<li key={photo.id} id={photo.id} onClick={this._handleClick}>
                    <img src={photo.url}  className="photoTiles"/>
                  </li>);
        }
      }.bind(this));
    return (
      <div className="photoTileContainer">
        <div className="group"><label className="photoLabel">Photos</label>
          <div className="photoButtons group">
            <DeleteButton albumSelected= {this.state.albumSelected}/>
            <UploadButton albumSelected= {this.state.albumSelected}/>
          </div>
        </div>
        <ul className="group photoList">
          {tiles}
        </ul>
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
      <div className="uploadButton" id="uploadButton" onClick={this._onClick}>
        Upload
      </div>
    );
  }
})


var DeleteButton = React.createClass({
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
    // cloudinary.openUploadWidget(
    //   { cloud_name: 'dayd3nm4v',
    //     upload_preset: 'xwgzpiek'},
    //     this._handleUpload
    // );
  },
  render : function() {
    return (
      <div className="deleteButton" id="deleteButton" onClick={this._onClick}>
        Delete
      </div>
    );
  }
})
