var FrontPage = React.createClass({
  getInitialState : function() {
    return ({user : {},
             photos : [],
             featuredUsers : [],
           });
  },
  componentDidMount : function() {

    if (typeof window.current_user !== 'undefined' ){
      UserUtil.getCurrentUser();
    }
    PhotoUtil.fetchFeedPhotos(PhotoStore.filterSport());
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
