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
  render : function () {
    return(
      <div>
        <div className="loginButtons">login</div>
        <div className="loginButtons">signup</div>
      </div>
    );
  }
});




var Logout = React.createClass({
  render : function () {
    return(
      <div>signout</div>
    );
  }
});
