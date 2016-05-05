var Footer = React.createClass ({
  _linkedIn : function () {
    window.location.href="https://www.linkedin.com/in/ahoang512";
  },

  _github : function () {
    window.location.href="https://github.com/ahoang512/ballr";
  },
  render : function () {
    return (
      <div id="footer">
        <div className="footerContent">
          <div onClick={this._github}><img src="http://res.cloudinary.com/dayd3nm4v/image/upload/v1456158708/github_logo_white_ubxfu3.png"/></div>
          <div onClick={this._linkedIn}><img src="http://res.cloudinary.com/dayd3nm4v/image/upload/v1456158707/linked_rqferk.png"/></div>
        </div>
      </div>
    )
  }
});
