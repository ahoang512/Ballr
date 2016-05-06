var NavBar = React.createClass({
  mixins : [ReactRouter.History],
  getInitialState : function () {
    return ({
      loggedIn : false
    });
  },
  _logo : function () {
    this.history.pushState(null, '/', {});
  },
  _browse: function () {
    PhotoActions.filterClicked("All");
    this.history.pushState(null, "front", {});
  },

  componentDidMount : function () {
    UserStore.addChangeListener(this._onChange);
  },
  componentWillUnmount : function () {
    UserStore.removeChangeListener(this._onChange);
  },
  _onChange : function () {
    this.setState({
      loggedIn : true
    });
  },
  render : function () {
    var loggedIn = true;
    if (typeof window.current_user === 'undefined'){
      loggedIn = false;
    }


    return (
      <nav className="navbar group">
        <div className="logo" onClick={this._logo}>
          <div><img src="/logo2.png"/></div>
        </div>
        <div className="browseButton" onClick={this._browse}>browse</div>
        <div className="navButtons">
          {loggedIn ? <LoggedIn/> : <NotLogged/> }
        </div>
      </nav>
    );
  }
});

var NotLogged = React.createClass({
  _login : function (e) {
    window.location="/session/new";
  },
  _signUp : function (e) {
    window.location="/users/new";
  },

  _guest : function (e) {
    ApiUtil.guestLogin();
  },
  render : function () {
    return(
      <div>
        <div className="loginButtons" onClick={this._login}>login</div>
        <div className="loginButtons" onClick={this._signUp}>signup</div>
      </div>
    );
  }
});




var LoggedIn = React.createClass({
  mixins : [ReactRouter.History],
  _signOut : function() {
    ApiUtil.destroySession();
  },
  _library : function () {
    this.history.pushState(null, '/user/'+window.current_user+'/edit', {});
  },
  render : function () {
    return(
      <div>
        <div onClick={this._signOut}>signout</div>
        <div onClick={this._library}>my library</div>
      </div>
    );
  }
});
