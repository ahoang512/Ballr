var Login = React.createClass({
  _login : function (e) {
    var email = e.target[0].value;
    var pw = e.target[1].value;

    var params = {
      user: {
        email : email,
        password : pw
      }
    }
    window.UserUtil.loginUser(params);
  },
  render : function () {
    return (
      <div className="loginPage">
        <div className="loginBox">
          <div className="loginLogo"><img src="/logo2.png"/></div>
          <form onSubmit={this._login}>
            <label className="email">Email
            </label>
              <input type="text" name="user[email]"/>
            <label className="password">
              Password
            </label>
            <input type="password" name="user[password]" />
            <input type="submit"  id="loginButton" value="Login"/>
          </form>
          <form onSubmit={this._login}>
            <input type="hidden" name="user[email]" value="a@a.com"/>
            <input type="hidden" name="user[password]" value="password"/>
            <input type="submit" value="Guest Login" id="guestButton"/>
          </form>
        </div>
      </div>
    )
  }
});
