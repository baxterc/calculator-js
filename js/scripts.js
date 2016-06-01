var add = function(number1,  number2){
return number1 + number2;
};

var subtract = function(number1,  number2){
return number1 - number2;
};

var multiply = function(number1,  number2){
return number1 * number2;
};

var divide = function(number1,  number2){
return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add .one").val());
    var number2 = parseInt($("#add .two").val());
    alert(add(number1, number2));
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract .one").val());
    var number2 = parseInt($("#subtract .two").val());
    alert(subtract(number1, number2));
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply .one").val());
    var number2 = parseInt($("#multiply .two").val());
    alert(multiply(number1, number2));
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide .one").val());
    var number2 = parseInt($("#divide .two").val());
    alert(divide(number1, number2));
  });
});

  // var zero = 0;
  // var one = 1;
  // var two = 2;
  // var three = 3;
  // var four = 4;
  // var five = 5;
  // var six = 6;
  // var seven = 7;
  // var eight = 8;
  // var nine = 9;

  //   $(".number").click(function() {
  //     $("#result").append(this);
  //   })
