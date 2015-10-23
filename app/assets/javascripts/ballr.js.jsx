var startReact = function () {
  $(function(){
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;
    var root = document.getElementById('container');
    var App = React.createClass({
      render: function(){
        return (
            <div className="app">
              <NavBar/>
              {this.props.children}
            </div>
        );
      }
    });

    React.render((
      <Router>
        <Route path="/" component= {App}>
        <IndexRoute component={LandingPage}/>
          <Route path="user/:userid/edit" component={EditAlbum}/>
          <Route path="photos/:username" component={UserPage}/>
        </Route>
      </Router>
    ), root);
  });
}
