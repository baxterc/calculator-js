$(document).ready(function() {

  var add = function(number1,  number2){
  return number1 + number2;
  };

  var zero = 0;
  var one = 1;
  var two = 2;
  var three = 3;
  var four = 4;
  var five = 5;
  var six = 6;
  var seven = 7;
  var eight = 8;
  var nine = 9;

  // var number1 = parseInt(prompt("Enter a number:"));
  // var number2 = parseInt(prompt("Enter another number:"));
  // alert(add(number1, number2));

  // var one = $("#one").val();

  $(".number").click(function() {
    $("#result").append(this);
  })
});
