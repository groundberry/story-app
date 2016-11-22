$(document).ready(function(){

  $(".animal").on('click',function(){
    $(this).insertAfter("#first-word");
    $("#first-word").hide();
  });

  $(".place").on('click',function(){
    $(this).insertAfter("#second-word");
    $("#second-word").hide();
  });

  $(".button").on('click',function(){
    $(".second-sentence").show("slow");
  });
});
