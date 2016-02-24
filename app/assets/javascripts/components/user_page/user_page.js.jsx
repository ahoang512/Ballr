var UserPage = React.createClass({
  //this.props.location.query.user_id
  //this.props.location.query.album_id
  //this.props.location.query.id
  getInitialState : function() {
    return ({photoSelectedId : this.props.location.query.id,
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
           selected={this.props.location.query.id}
           album={this.props.location.query.album_id}/>
        <FullPhotoInfo/>
        <Comments/>
      </div>);
  }
});
