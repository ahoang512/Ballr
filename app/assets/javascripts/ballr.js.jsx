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
        {/*<IndexRoute component={EditAlbum}/>*/}
        <Route path="edit" component={EditAlbum}/>
      </Route>
    </Router>
  ), root);



});
