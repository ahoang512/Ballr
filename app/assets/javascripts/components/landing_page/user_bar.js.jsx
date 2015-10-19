var UserBar = React.createClass({
  //this.props.user
  render : function () {
    var loggedIn = false;
    if (typeof this.props.user.id !== 'undefined' ){
      loggedIn = true;
    }

    return (
      <div id="userBar">
        <div className="userName">{this.props.user.username}</div>
        {loggedIn ? <UserInfo user={this.props.user}/> : <DefaultInfo/>}
      </div>
    );
  }
});


var DefaultInfo = React.createClass({
  render : function(){
    return (
      <div className="userInfo">
        <img src="http://res.cloudinary.com/dayd3nm4v/image/upload/v1445033817/dzkg6i40xsb16orsipu8.jpg"/>
      </div>);
  }
});

var UserInfo = React.createClass({
  //this.props.user
  render : function(){
    return (<div className="userInfo">
          <img src={this.props.user.photo_url}/>
          <UploadUserPhotoButton/>
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
        Upload
      </div>
    )
  }
});
