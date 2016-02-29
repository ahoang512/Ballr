var Login = React.createClass({
  render : function (){
    return (
      <div class="loginPage">
        <div class="loginBox">
          <div class="loginLogo"><img src="/logo2.png"/></div>
          <h1>Welcome back!</h1>

          <form  action="<%= session_url %>" method="post">
            <label class="email">Email
            </label>
              <input type="text" name="user[email]"/>
            <label class="password">
              Password
            </label>
            <input type="password" name="user[password]" />
            <br/>
            <input type="submit"  id="loginButton" value="Login"/>
          </form>
        </div>
      </div>
    );
  }
});
