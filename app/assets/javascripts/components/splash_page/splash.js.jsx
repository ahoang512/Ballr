var Splash = React.createClass({
  render : function () {
    return (
      <div className="splash">
        <Splash1/>
        <SplashBar/>
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
      <div id="splash1" onClick={this._onClick}>
        <div className="hook">
          <h1>The hub for all your game day photos and highlights</h1>
          <h2>View, Upload, and Share Now!</h2>

        </div>
      </div>
    )
  }
});

var SplashBar = React.createClass({
  render : function () {
    return (
      <div className="splashBar">
        <div>
          div1
        </div>
        <div>
          div2
        </div>
        <div>
          div3
        </div>
      </div>
    )
  }
});
