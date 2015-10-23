var LandingPage = React.createClass({
  getInitialState : function() {
    return ({user : UserStore.currentUser(),
             photos : LandingStore.all(),
             option : LandingStore.option(),
             featuredUsers : []});
  },
  componentDidMount : function() {
    if (typeof window.current_user !== 'undefined' ){
      UserUtil.getCurrentUser();
    }
    UserStore.addChangeListener(this._onChange);
    LandingStore.addChangeListener(this._onChange);
    PhotoUtil.fetchRandomPhotos();
    UserUtil.fetchFeaturedUsers();
  },
  componentWillUnmount : function () {
    LandingStore.removeChangeListener(this._onChange);
  },
  _onChange : function () {
    debugger
    this.setState({user : UserStore.currentUser(),
                   photos : LandingStore.all(),
                   option : LandingStore.option(),
                   featuredUsers : UserStore.featuredUsers()});
  },

  render : function () {
    return (
      <div className="landingPage">
        <div className="landingContainer group">
          <UserBar user={this.state.user}
                   featured={this.state.featuredUsers}
          />
          <FeedOptions/>
          <PhotoFeed photos={this.state.photos}/>
        </div>
      </div>
    )
  }
});

var FeedOptions = React.createClass({
  _handleClick : function (e) {
    switch (e.target.textContent) {
      case "my photos":
        if (typeof window.current_user !== 'undefined'){
          PhotoUtil.fetchUserPhotos();
        } //else do nothing
        break;
      case "explore":
        PhotoUtil.fetchRandomPhotos();
        break;
    }
  },

  render : function() {
    var loggedIn = typeof window.current_user !== 'undefined'

    return (
      <div className="feedOptions">
        {loggedIn ? <div className="option" onClick={this._handleClick}>my photos</div>
        : {}}
        {loggedIn ? <div className="divider">|</div>
        : {}}
        <div className="option" onClick={this._handleClick}>explore</div>
      </div>
    )
  }
});
