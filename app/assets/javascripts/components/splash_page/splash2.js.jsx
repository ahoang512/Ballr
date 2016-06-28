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
          <div id="soccer" onClick={this._onClick}>
            <div  className="tileLabel" >Soccer</div>
          </div>
          <div id="football" onClick={this._onClick} onClick={this._onClick}>
            <div  className="tileLabel">Football</div>
          </div>
          <div id="basketball" onClick={this._onClick}>
            <div  className="tileLabel" >Basketball</div>
          </div>
        </div>
        <div className = "bottom group">
          <div id="baseball" onClick={this._onClick}>
            <div className="tileLabel">Baseball</div>
          </div>
          <div id="hockey" onClick={this._onClick}>
            <div className="tileLabel">Hockey</div>
          </div>
        </div>


      </div>
    )
  }
});
