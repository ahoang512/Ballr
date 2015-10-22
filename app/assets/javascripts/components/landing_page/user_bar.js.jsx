var UserBar = React.createClass({
  //this.props.user
  //this.props.featured
  render : function () {
    var loggedIn = false;
    if (typeof this.props.user.id !== 'undefined' ){
      loggedIn = true;
    }
    if (this.props.featured.length == 2 ){
      var featured = this.props.featured.map(function(user){
        return (<UserInfo user={user}/>);
      });
    }

    return (
      <div id="userBar">

        {loggedIn ? <UserInfo user={this.props.user}/> : {}}
        <br/>
        <h1>&darr;  &nbsp; Featured Users &nbsp; &darr;</h1>
        {featured}
      </div>
    );
  }
});



var UserInfo = React.createClass({
  //this.props.user
  render : function(){
    var loggedIn = window.current_user === this.props.user.id;
    return (<div className="userInfo">
          <div className="userName">{this.props.user.username}</div>
          <img src={this.props.user.photo_url}/>
          {loggedIn ? <UploadUserPhotoButton/> : {}}
          <div className="userStats">
            <label>Number of Photos:
              {this.props.user.photo_count}
            </label>
            <br/>
            <label>Number of Albums:
              {this.props.user.album_count}
            </label>
          </div>
        </div>);
  }
});


var UploadUserPhotoButton = React.createClass({
  _handleUpload : function (error, result) {
    var url = result[0].url;
    var filename = result[0].original_filename;
    var params = {
      user : {
        "photo_url" : url,
      }
    }
    LandingUtil.updateUserPhoto(params);
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
      <div className= "userPhotoUpload" onClick={this._onClick}>
        Upload Profile Picture
      </div>
    )
  }
});
