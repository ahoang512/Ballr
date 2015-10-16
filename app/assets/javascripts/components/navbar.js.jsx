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
            {loggedIn ? <Logout/> : <Login/> }
          </div>
      </div>
    );
  }
});

var Login = React.createClass({
  _login : function (e) {
    location.assign("http://ballrapp.herokuapp.com/session/new");
  },
  _signUp : function (e) {
    location.assign("http://ballrapp.herokuapp.com/users/new");
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




var Logout = React.createClass({
  _signOut : function() {
    ApiUtil.destroySession();
  },
  render : function () {
    return(
      <div onClick={this._signOut}>signout</div>
    );
  }
});
