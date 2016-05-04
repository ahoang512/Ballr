
var masonryOptions = {
    transitionDuration: 0
};

var Gallery = React.createClass({
  //this.props.photos

  render : function () {
    var idx = false
    var cls = "grid-item grid-item--width2"
    var childElements = this.props.photos.map(function(photo){
      if (idx){
        cls = "grid-item grid-item--height2"
      }else{
        cls = "grid-item grid-item--width2"
      }
      idx = !idx;

      return (
        <div className={cls} key={photo.id}>
          <img src={photo.url}/>
        </div>
      );



    });

    return (
      <div className="grid" data-masonry='{ "itemSelector": ".grid-item",
                                            "columnWidth": 200,
                                            }'>
        {childElements}
      </div>
    );
  }
});
