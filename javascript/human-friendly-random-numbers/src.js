function RNG(upperLimit) {
  this.upperLimit = upperLimit;
  this.availableNumbers = [];
}

RNG.prototype.rand = function () {

  if (this.availableNumbers.length == 0)
    this.availableNumbers = initializeArray(this.upperLimit);

  var randomIndex = getRandomInt(this.availableNumbers.length);
  var retVal = this.availableNumbers[randomIndex];
  this.availableNumbers.splice(randomIndex, 1);
  return retVal;

}

function initializeArray(length) {
  var i, a = [];
  for(i = 0; i < length; i++)
    a.push(i);
  return a;
}
function getRandomInt(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}
