var PhotoItem = React.createClass({
  render : function () {
    return (
      <li key={this.props.photo.id} className="photoItems">
        <img src={this.props.photo.url} className="feedPhotos"/>
        <PhotoInfo photo={this.props.photo}/>
      </li>
    );
  }
});
