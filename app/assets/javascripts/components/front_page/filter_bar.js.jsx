var FilterBar = React.createClass({
  render : function () {
    return (
      <div className="filterBar">
        <ul className="filterList">
          <li key="tennis">Tennis</li>
          <li key="world">World Soccer</li>
          <li key="mls">MLS</li>
          <li key="nhl">NHL</li>
          <li key="mlb">MLB</li>
          <li key="nba">NBA</li>
          <li key="nfl">NFL</li>
        </ul>
      </div>
    )
  }
});
