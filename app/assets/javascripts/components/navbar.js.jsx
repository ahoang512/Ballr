var NavBar = React.createClass({
  mixins : [ReactRouter.History],

  _logo : function () {
    this.history.pushState(null, '/', {});
  },
  render : function () {
    var loggedIn = true;
    if (typeof window.current_user === 'undefined'){
      loggedIn = false;
    }


    return (
      <div className="navbar">
        <span className="logo" onClick={this._logo}>ballr</span>
          <div className="navButtons">
            {loggedIn ? <LoggedIn/> : <NotLogged/> }
          </div>
      </div>
    );
  }
});

var NotLogged = React.createClass({
  _login : function (e) {
    // location.assign("http://localhost:3000/session/new");
    location.assign("http://ballrapp.herokuapp.com/session/new");
  },
  _signUp : function (e) {
    // location.assign("http://localhost:3000/users/new");
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
        <div onClick={this._library}>library</div>
      </div>
    );
  }
});
