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
