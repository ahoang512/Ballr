var NavBar = React.createClass({
  render : function () {
    var loggedIn = true;
    if (typeof window.current_user === 'undefined'){
      loggedIn = false;
    }


    return (
      <div className="navbar">
        <span className="logo">ballr</span>
          <div className="navButtons">
            {loggedIn ? <LoggedIn/> : <NotLogged/> }
          </div>
      </div>
    );
  }
});

var NotLogged = React.createClass({
  _login : function (e) {
    location.assign("http://localhost:3000/session/new");
  },
  _signUp : function (e) {
    location.assign("http://localhost:3000/users/new");
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
  _signOut : function() {
    ApiUtil.destroySession();
  },
  render : function () {
    return(
      <div>
        <div onClick={this._signOut}>signout</div>
        <div>library</div>
      </div>
    );
  }
});
