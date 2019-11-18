$(document).ready(function(){

  $('input[name="keywordInput"]').amsifySuggestags();
  
  var $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  $('.filter-button-group').on('click','button',function(){
    var filterValue = $(this).attr('data-filter');

    $grid.isotope({ filter: filterValue });
  });
});
