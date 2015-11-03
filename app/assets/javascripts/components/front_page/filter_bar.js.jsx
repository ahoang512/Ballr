var FilterBar = React.createClass({
  _onClick : function (e) {
    PhotoUtil.fetchFeedPhotos(e.target.textContent);
  },

  render : function () {
    return (
      <div className="filterBar">
        <ul className="filterList" onClick={this._onClick}>
          <li key="world">World Soccer</li>
          <li key="mls">MLS</li>
          <li key="nhl">NHL</li>
          <li key="mlb">MLB</li>
          <li key="nba">NBA</li>
          <li key="nfl">NFL</li>
          <li key="all">ALL</li>
        </ul>
      </div>
    )
  }
});
