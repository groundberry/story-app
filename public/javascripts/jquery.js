$(document).ready(function(){

  $("a").on('click',function(){
    $(this).insertAfter("#first-word");
    $("#first-word").hide();
  });

});
