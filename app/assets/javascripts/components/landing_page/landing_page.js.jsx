var LandingPage = React.createClass({
  getInitialState : function() {
    return ({user : LandingStore.user(),
             photos : LandingStore.all(),
             option : LandingStore.option()});
  },
  componentDidMount : function() {
    if (typeof window.current_user !== 'undefined' ){
      LandingUtil.getCurrentUser();
    }
    LandingStore.addChangeListener(this._onChange);
    LandingUtil.fetchRandomPhotos();
  },
  componentWillUnmount : function () {
    LandingStore.removeChangeListener(this._onChange);
  },
  _onChange : function () {
    this.setState({user : LandingStore.user(),
                   photos : LandingStore.all(),
                   option : LandingStore.option()});
  },

  render : function () {
    return (
      <div className="landingPage">
        <div className="landingContainer group">
          <UserBar user={this.state.user}/>
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
      case "personal":
        LandingUtil.fetchUserPhotos();
        break;
      case "front page":
        LandingUtil.fetchRandomPhotos();
        break;
    }
  },

  render : function() {
    return (
      <div className="feedOptions">
        <div className="option" onClick={this._handleClick}>front page</div>
        <div className="divider">|</div>
        <div className="option" onClick={this._handleClick}>personal</div>
      </div>
    )
  }
});
