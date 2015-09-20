var bottlesOfBeer = function(numberBottles, originalNumber) {
  var numberArray = [];
  var sentence = "";
  var bottles = "bottles";
  var bottlesMinusOne = "";
  switch(numberBottles) {
    case 1:
      bottles = "bottle";
      bottlesMinusOne = "no more bottles";
      break;
    case 2:
      bottlesMinusOne = "1 bottle";
      break;
    default:
      bottlesMinusOne = (numberBottles - 1) + " bottles";
  };
  if (numberBottles > 0) {
    sentence = "<li>" + numberBottles + " " + bottles + " of beer on the wall, " + numberBottles + " " + bottles + " of beer. Take one down and pass it around, " + bottlesMinusOne + " of beer on the wall.</li>" + (bottlesOfBeer((numberBottles - 1), originalNumber));
  } else {
    if (originalNumber == 1) {
      bottles = "bottle";
    }
    sentence = "<li>No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + originalNumber + " " + bottles + " of beer on the wall.</li>"
  };
  return sentence;
};

$(document).ready(function() {
  $("form#bottles-of-beer").submit(function(event) {
    var number = parseInt($("input#number").val());
    var lyrics = bottlesOfBeer(number, number);
    $("ul#lyrics").children().remove();
    $("ul#lyrics").append(lyrics);
    $("#result").show();
    event.preventDefault();
  });
});
