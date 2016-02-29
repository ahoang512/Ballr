var FilterBar = React.createClass({
  _onClick : function (e) {
    if (e.target.className != "filterList" && e.target.textContent !== ""){
      PhotoUtil.fetchFeedPhotos(e.target.textContent);
    }else{
      PhotoUtil.fetchFeedPhotos(e.currentTarget.textContent);
    }
  },

  render : function () {
    //icons
    var football= "http://res.cloudinary.com/dayd3nm4v/image/upload/v1446675290/football_icon_xf6eyh.png";
    var soccer="http://res.cloudinary.com/dayd3nm4v/image/upload/v1446674069/soccer_icon_mt9gov.png";
    var basketball="http://res.cloudinary.com/dayd3nm4v/image/upload/v1446675285/basketball_icon_zj6kim.png";
    var hockey = "http://res.cloudinary.com/dayd3nm4v/image/upload/v1446675978/hockey_icon_etceby.png";
    var baseball="http://res.cloudinary.com/dayd3nm4v/image/upload/v1446676262/baseball_icon_yoxto2.png";
    return (
      <div className="filterBar">
        <div className="group">
          <h1>Filter by</h1>
          <ul className="filterList">
            <li key="all" onClick={this._onClick}>All</li>
            <li key="mls" onClick={this._onClick}>Soccer
              <img className="filterIcons" src={soccer}/>
            </li>
            <li key="nhl" onClick={this._onClick}>Hockey
              <img className="filterIcons" src={hockey}/>
            </li>
            <li key="mlb" onClick={this._onClick}>Baseball
              <img className="filterIcons" src={baseball}/>
            </li>
            <li key="Basketball" onClick={this._onClick}>Basketball
              <img className="filterIcons" src={basketball}/>
            </li>
            <li key="nfl" onClick={this._onClick}>Football
              <img className="filterIcons" src={football} onClick={this._onClick}/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});
