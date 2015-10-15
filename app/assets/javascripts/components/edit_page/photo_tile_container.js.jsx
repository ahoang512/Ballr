var PhotoTileContainer = React.createClass( {
  getInitialState : function () {
    return ({photos : PhotoStore.all()});
  },
  componentDidMount : function () {
    PhotoStore.addChangeListener(this._onChange);
  },

  _onChange : function () {
    this.setState({photos : PhotoStore.all()});
  },
  render : function (){
    var tiles =
      this.state.photos.map(function(photo){
        return (<li key={photo.id}>
                  <img src={photo.url}  className="photoTiles"/>
                </li>);
      }.bind(this));
    return (
      <div className="photoTileContainer">
        <div className="group"><label className="photoLabel">Photos</label>
            <UploadButton albumSelected= {this.state.albumSelected}/>
        </div>
        <ul className="group photoList">
          {tiles}
        </ul>
      </div>
    );
  }
});
