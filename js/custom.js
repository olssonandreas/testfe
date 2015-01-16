$(function(){
  var ico = $('.magnifying-glass');
  var form = $('.search-box');
  var nav = $('navbar');
  
   
    ico.click(function(){
        form.toggleClass('expanded');
        

        $('.search-box:first').focus();

        return false;
    }); 

    if ($("search-box:first").is(":focus")) {
}
    
});




$('.carousel2[data-type="multi"] .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
