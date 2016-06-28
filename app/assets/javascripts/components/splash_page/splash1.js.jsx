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
