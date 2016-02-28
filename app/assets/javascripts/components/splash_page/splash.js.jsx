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
    this.history.pushState({sport: "All"}, "front");
  },
  render : function () {
    return (
      <div id="splash1" onClick={this._onClick} >
        <div className="hook">
          <div>YOUR GAME DAY GALLERY</div>
          <div>Share photos and gifs on ballr</div>

        </div>
      </div>
    )
  }
});

var SplashBar = React.createClass({
  mixins : [ReactRouter.History],
  _soccer : function () {
    this.history.pushState({sport: "Soccer"}, "front");
  },
  _football : function () {
    this.history.pushState({sport: "Football"}, "front");
  },
  _basketball : function () {
    this.history.pushState({sport: "Basketball"}, "front");
  },
  render : function () {
    return (
      <div className="splashBar group">
        <div onClick={this._soccer}>
          <div className="tileLabel">Soccer</div>
        </div>
        <div onClick={this._football}>
          <div className="tileLabel">Football</div>
        </div>
        <div onClick={this._basketball}>
          <div className="tileLabel">Basketball</div>
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
          <h2> What sport do you follow?</h2>
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
          <div onClick={this._github}><img src="http://res.cloudinary.com/dayd3nm4v/image/upload/v1456158708/github_logo_white_ubxfu3.png"/></div>
          <div onClick={this._linkedIn}><img src="http://res.cloudinary.com/dayd3nm4v/image/upload/v1456158707/linked_rqferk.png"/></div>
        </div>
      </div>
    )
  }
});
