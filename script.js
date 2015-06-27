var time = new Date();

var main = function(){
  if (time.getSeconds() % 2 == 0){
    $(".mouth").css("height", "150px");
    $(".says").html("Im random");
  }
  else {
    $(".mouth").css("height", "20px");
    $(".says").html("Having Fun");
  }
  if (time.getSeconds() % 3 == 0){
     $(".eye").css("height", "1px");
     $(".says").html("Who are you !?");
  }
  else if (time.getSeconds() % 5 == 0){
     $(".eye").css("height", "20px");
     $(".says").html("I like Nachos");
  }
};

$(document).ready(main);
