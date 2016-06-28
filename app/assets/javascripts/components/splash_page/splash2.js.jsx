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

  _onClick : function (e) {
      this.history.pushState({sport: e.target.textContent}, "front")
  },
  render : function () {
    return (
      <div className="splashBar group" >
        <div className="top group" >
          <div id="soccer" >
            <div  className="tileLabel" onClick={this._onClick}>Soccer</div>
          </div>
          <div id="football">
            <div  className="tileLabel" onClick={this._onClick}>Football</div>
          </div>
          <div id="basketball">
            <div  className="tileLabel" onClick={this._onClick}>Basketball</div>
          </div>
        </div>
        <div className = "bottom group">
          <div id="baseball">
            <div className="tileLabel" onClick={this._onClick}>Baseball</div>
          </div>
          <div id="hockey">
            <div className="tileLabel" onClick={this._onClick}>Hockey</div>
          </div>
        </div>


      </div>
    )
  }
});
