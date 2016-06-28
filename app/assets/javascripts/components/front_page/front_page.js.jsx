var FrontPage = React.createClass({
  mixins : [ReactRouter.History],

  getInitialState : function() {
    return ({user : {},
             photos : [],
             featuredUsers : [],
             filtered : this.props.location.state.sport
           });
  },
  componentDidMount : function() {
    PhotoActions.filterClicked(this.state.filtered);
    UserStore.addChangeListener(this._onChange);
    PhotoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount : function () {
    PhotoStore.removeChangeListener(this._onChange);
    UserStore.removeChangeListener(this._onChange);
  },
  _onChange : function () {
    this.setState({user : UserStore.currentUser(),
                   photos : PhotoStore.all(),
                   featuredUsers : UserStore.featuredUsers(),
                   });
  },

  render : function () {
    return (
      <div className="frontPage">
        <div className="frontContainer group">
          <FilterBar/>
          <div className="photoFeed">
            <PhotoList photos={this.state.photos}/>
          </div>
        </div>
      </div>
    )
  }
});
