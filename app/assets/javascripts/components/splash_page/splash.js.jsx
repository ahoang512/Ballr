var Splash = React.createClass({

  render : function () {
    return (
      <div className="splash" >
        <Splash1/>
        <Splash2/>
      </div>
    );
  }
});


var Splash1 = React.createClass({
  mixins : [ReactRouter.History],
  _onClick : function () {
    this.history.pushState({sport: "All"}, "front");
  },

  _demoLogin : function (e) {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    window.location="/session/new";
    // UserUtil.demoLogin();
  },
  render : function () {
    return (
      <div id="splash1" onClick={this._onClick} >
        <img src="http://res.cloudinary.com/dayd3nm4v/image/upload/q_90/v1456684458/steph_3_hfph5e.jpg"/>
        <div className="hook">
          <div>YOUR GAME DAY GALLERY</div>
          <div>Share photos and gifs on ballr</div>
          <div className="demo" onClick={this._demoLogin}>
            Demo
          </div>
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

  _onClick : function (e) {
    PhotoActions.filterClicked(e.target.textContent);
    this.history.pushState({}, "front")
  },
  render : function () {
    return (
      <div className="splashBar group" onClick={this._onClick}>
        <div >
          <div className="tileLabel">Soccer</div>
        </div>
        <div >
          <div className="tileLabel">Football</div>
        </div>
        <div >
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
