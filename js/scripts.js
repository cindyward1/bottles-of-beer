var bottlesOfBeer = function(numberBottles, originalNumber) {
  var numberArray = [];
  var sentence = "";
  var bottles = "bottles";
  var bottlesMinusOne = "";
  if (numberBottles > 2) {
    bottlesMinusOne = (index - 1) + " bottles"
  } else if (numberBottles == 2) {
    bottlesMinusOne = "1 bottle"
  } else if (numberBottles == 1){
    bottles = "bottle";
    bottlesMinusOne = "No more bottles";
  };
  if (numberBottles > 0) {
    sentence = "<li>" + numberBottles + " " + bottles + " of beer on the wall, " + numberBottles + " " + bottles + " of beer. Take one down and pass it around, " + bottlesMinusOne + " of beer on the wall.</li>" + (bottlesOfBeer((numberBottles - 1), originalNumber));
  } else {
    sentence = "<li>No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + originalNumber + " " + bottles + " of beer on the wall.</li>"
  };
  return sentence;
};