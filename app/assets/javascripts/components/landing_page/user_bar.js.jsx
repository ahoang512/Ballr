var UserBar = React.createClass({
  //this.props.user
  render : function () {
    var loggedIn = false;
    if (typeof this.props.user.id !== 'undefined' ){
      loggedIn = true;
    }
    return (
      <div id="userBar">
        {loggedIn ? <UserInfo/> : <DefaultInfo/>}
      </div>
    );
  }
});


var DefaultInfo = React.createClass({
  render : function(){
    return (
      <div className="userInfo">
        <img src="http://res.cloudinary.com/dayd3nm4v/image/upload/v1445033817/dzkg6i40xsb16orsipu8.jpg"/>
      </div>);
  }
});

var UserInfo = React.createClass({
  render : function(){
    return (<div></div>);
  }
});
