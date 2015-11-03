var FrontPage = React.createClass({
  getInitialState : function() {
    return ({user : {},
             photos : [],
             featuredUsers : []});
  },
  componentDidMount : function() {
    if (typeof window.current_user !== 'undefined' ){
      UserUtil.getCurrentUser();
    }
    PhotoUtil.fetchFeedPhotos("none");
    UserUtil.fetchFeaturedUsers();
    UserStore.addChangeListener(this._onChange);
    PhotoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount : function () {
    PhotoStore.removeChangeListener(this._onChange);
    UserStore.removeChangeListener(this._onChange);
  },
  _onChange : function () {
    this.setState({user : UserStore.currentUser(),
                   photos : PhotoStore.all(),
                   featuredUsers : UserStore.featuredUsers()});
  },

  render : function () {
    return (
      <div className="frontPage">
        <div className="frontContainer group">
          <FilterBar/>
          <UserBar user={this.state.user}
                   featured={this.state.featuredUsers}
          />
        {/*<FeedOptions/>*/}
          <div className="photoFeed">
            <PhotoList photos={this.state.photos}/>
          </div>
        </div>
      </div>
    )
  }
});

var FeedOptions = React.createClass({
  _handleClick : function (e) {
    switch (e.target.textContent) {
      case "my photos":
        PhotoUtil.fetchUserPhotos();
        break;
      case "explore":
        PhotoUtil.fetchFeedPhotos();
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
