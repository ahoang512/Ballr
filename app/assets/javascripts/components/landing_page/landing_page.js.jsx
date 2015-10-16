var LandingPage = React.createClass({
  getInitialState : function() {
    return ({user : LandingStore.user()});
  },
  componentDidMount : function() {
    if (typeof window.current_user !== 'undefined' ){
      LandingUtil.getCurrentUser();
    }
    LandingStore.addChangeListener(this._onChange);
  },
  componentWillUnmount : function () {
    LandingStore.removeChangeListener(this._onChange);
  },
  _onChange : function () {
    this.setState({user : LandingStore.user()});
  },

  render : function () {
    return (
      <div className="landingPage">
        <div className="landingContainer group">
          <UserBar user={this.state.user}/>
          <PhotoFeed/>
        </div>
      </div>
    )
  }
});
