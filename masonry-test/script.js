  $(function(){
 
    var $grid = $('.grid');
  
    $grid.imagesLoaded( function(){
      $grid.masonry({
        itemSelector : '.masonryImage'
      });
    });
  
  });