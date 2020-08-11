$(document).ready(function(){
  $("#card-one").click(function() {
    $("#variables").toggleClass("hidden");
  });

  $("#card-two").click(function(){
    $("#function").toggleClass("hidden");
  });

  $("#card-three").click(function(){
    $("#methods").toggleClass("hidden");
  });

  $("#card-four").click(function(){
    $("#parameters").toggleClass("hidden");
  });

  $("#card-five").click(function(){
    $("#return").toggleClass("hidden");
  });

  $("#card-six").click(function(){
    $("#booleans").toggleClass("hidden");
  });
});