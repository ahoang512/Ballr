var Splash = React.createClass({

  render : function () {
    return (
      <div className="splash" >
        <Splash1/>
        <Splash2/>
        <Footer/>
      </div>
    );
  }
});


var Splash1 = React.createClass({
  mixins : [ReactRouter.History],
  _onClick : function () {
    this.history.pushState({}, "front");
  },
  render : function () {
    return (
      <div id="splash1" onClick={this._onClick} >
        <div className="hook">
          <div>WELCOME BACK</div>
          <div>View, Upload, and Share your Gameday Highlights Now!</div>

        </div>
      </div>
    )
  }
});

var SplashBar = React.createClass({
  render : function () {
    return (
      <div className="splashBar group">
        <div>
          <div className="tileLabel">Upload Photos</div>
        </div>
        <div>
          <div className="tileLabel">View Gameday Highlights</div>
        </div>
        <div>
          <div className="tileLabel">Share Gifs</div>
        </div>
      </div>
    )
  }
});

var Splash2 = React.createClass ( {
  render : function () {
    return (
      <div id="splash2">
         <div className = "prompt">
          <h1> Get Started! </h1>
          <h2> What would you like to do?</h2>
        </div>
        <SplashBar/>
      </div>
    )
  }
});

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
          <div onClick={this._github}><img src="/github_logo_white.png"/></div>
          <div onClick={this._linkedIn}><img src="/linked.png"/></div>
        </div>
      </div>
    )
  }
});
