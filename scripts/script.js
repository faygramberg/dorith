// external js: masonry.pkgd.js

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 200,
  percentPosition: true
});





// init Masonry
var $grid = $('.grid').masonry({
  // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
