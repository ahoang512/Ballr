
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
        <IndexRoute component={Splash}/>

          <Route path="front" component={FrontPage}/>
          <Route path="user/:userid/edit" component={EditAlbum}/>
          <Route path="photos/:username" component={UserPage}/>
        </Route>
        <Route path="/login" component={Login}/>
      </Router>
    ), root);
  });
