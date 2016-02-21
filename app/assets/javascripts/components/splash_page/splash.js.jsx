var Splash = React.createClass({
  mixins : [ReactRouter.History],
  _onClick : function () {
    this.history.pushState({}, "front");
  },
  render : function () {
    return (
      <div className="splash" onClick={this._onClick}>
        <Splash1/>
        <Splash2/>
      </div>
    );
  }
});


var Splash1 = React.createClass({

  render : function () {
    return (
      <div id="splash1" >
        <div className="hook">
          <h1>WELCOME BACK</h1>
          <h2>View, Upload, and Share your Gameday Highlights Now!</h2>

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
