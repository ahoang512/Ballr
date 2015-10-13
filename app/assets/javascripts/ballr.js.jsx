$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRouter = ReactRouter.IndexRouter;

  var root = document.getElementById('container');

  React.render((
    <Router>
      <Route path="/" component= {NavBar}/>
    </Router>
  ), root);

});
