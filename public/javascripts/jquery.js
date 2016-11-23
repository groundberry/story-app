$(document).ready(function(){

  $(".animal").on('click',function(){
    $("#first-word").replaceWith(this);
  });

  $(".place").on('click',function(){
    $("#second-word").replaceWith(this);
  });

  $(".button").on('click',function(){
    $(".second-sentence").show("slow");
  });
});
