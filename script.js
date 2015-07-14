var main = function(){
  setInterval(function() {
  var time = new Date();
  if (time.getSeconds() % 2 == 0){
    $(".mouth").css("height", "150px");
    $(".eye").css("height", "80px");
    $(".says").html("Im random");
    $(".blogbox").css("background-color", "yellow");
  }
  else {
    $(".mouth").css("height", "20px");
    $(".says").html("Having Fun");
    $(".blogbox").css("background-color", "cyan");
  }
  if (time.getSeconds() % 3 == 0){
     $(".eye").css("height", "1px");
     $(".says").html("Who are you !?");
  }
  else if (time.getSeconds() % 7 == 0){
     $(".eye").css("height", "20px");
     $(".says").html("I like Nachos");
     $(".blogbox").css("background-color", "#66FF99");
  }
  if (time.getDate == 25 && time.getMonth == 12){
  }
  }, 1000);
};

$(document).ready(main);
