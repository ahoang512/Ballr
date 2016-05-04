var FilterBar = React.createClass({
  getInitialState : function () {
    return ({
      sport : "All"
    })
  },

  componentDidMount : function () {
    PhotoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount : function () {
    PhotoStore.removeChangeListener(this._onChange);
  },
  _onChange : function () {
    this.setState({
      sport : PhotoStore.filterSport()
    })
  },
  _onClick : function (e) {
    PhotoActions.filterClicked(e.target.textContent);
  },

  render : function () {

    /*
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
    */
    var sports = ["Soccer", "Hockey", "Baseball", "Basketball", "Football"];
    var icons = {
      Football : "http://res.cloudinary.com/dayd3nm4v/image/upload/v1446675290/football_icon_xf6eyh.png",
      Soccer :"http://res.cloudinary.com/dayd3nm4v/image/upload/v1446674069/soccer_icon_mt9gov.png",
      Basketball :"http://res.cloudinary.com/dayd3nm4v/image/upload/v1446675285/basketball_icon_zj6kim.png",
      Hockey  : "http://res.cloudinary.com/dayd3nm4v/image/upload/v1446675978/hockey_icon_etceby.png",
      Baseball :"http://res.cloudinary.com/dayd3nm4v/image/upload/v1446676262/baseball_icon_yoxto2.png"
    }
    var lis = sports.map(function(sport){
      return (
        this.state.sport === sport ?
        <li key={sport} className = "filterSelected">{sport}
          <img className="filterIcons" src={icons[sport]}/>
        </li>
        :
        <li key={sport}>{sport}
          <img className="filterIcons" src={icons[sport]}/>
        </li>
      );
    }.bind(this));

    return (
      <div className="filterBar">
        <div className="group">
          <ul className="filterList" onClick={this._onClick}>
            <li key="all" >All</li>
            {lis}
          </ul>
        </div>
      </div>
    )
  }
});
