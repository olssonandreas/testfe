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