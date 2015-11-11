var FilterBar = React.createClass({
  _onClick : function (e) {
    if (e.target.className != "filterList"){
      PhotoUtil.fetchFeedPhotos(e.target.textContent);
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
        <h1>Filter By</h1>
        <ul className="filterList" onClick={this._onClick}>
          <li key="all">ALL</li>
          <li key="mls">Soccer
            <img className="filterIcons" src={soccer}/>
          </li>
          <li key="nhl">Hockey
            <img className="filterIcons" src={hockey}/>
          </li>
          <li key="mlb">Baseball
            <img className="filterIcons" src={baseball}/>
          </li>
          <li key="Basketball">Basketball
            <img className="filterIcons" src={basketball}/>
          </li>
          <li key="nfl">Football
            <img className="filterIcons" src={football}/>
          </li>

        </ul>
      </div>
    )
  }
});
