var UserPage = React.createClass({
  //this.props.location.query.user_id
  //this.props.location.query.album_id
  //this.props.location.query.photo_id
  getInitialState : function() {
    return ({photoSelected : this.props.location.query.photo_id,
             photos : PhotoStore.all()});

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

  render : function() {
    return (
      <div className = "userPage">
        <PhotoStream photos={this.state.photos}
           selected={this.props.location.query.photo_id}
           album={this.props.location.query.album_id}/>
        <FullPhotoInfo/>
      </div>);
  }
});
