var LandingPage = React.createClass({
  getInitialState : function() {
    return ({user : LandingStore.user(),
             photos : LandingStore.all(),
             option : LandingStore.option(),
             featuredUsers : []});
  },
  componentDidMount : function() {
    if (typeof window.current_user !== 'undefined' ){
      LandingUtil.getCurrentUser();
    }
    LandingStore.addChangeListener(this._onChange);
    LandingUtil.fetchRandomPhotos();
    LandingUtil.fetchRandomUsers();
  },
  componentWillUnmount : function () {
    LandingStore.removeChangeListener(this._onChange);
  },
  _onChange : function () {
    this.setState({user : LandingStore.user(),
                   photos : LandingStore.all(),
                   option : LandingStore.option(),
                   featuredUsers : LandingStore.featuredUsers()});
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
          LandingUtil.fetchUserPhotos();
        } //else do nothing
        break;
      case "explore":
        LandingUtil.fetchRandomPhotos();
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
