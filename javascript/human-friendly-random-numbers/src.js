function RNG(upperLimit) {
  this.upperLimit = upperLimit;
  this.availableNumbers = [];
}
RNG.prototype.rand = function () {

  var randomIndex, retVal;

  if (!this.availableNumbers.length)
    this.availableNumbers = initArray(this.upperLimit);

  randomIndex = randomInt(this.availableNumbers.length);
  retVal = this.availableNumbers[randomIndex];
  this.availableNumbers.splice(randomIndex, 1);
  return retVal;
}

function randomInt(upper) {
  return Math.floor(Math.random() * upper);
}
function initArray(upper) {
  var i, retVal = [];
  for (i = 0; i < upper; i++)
    retVal.push(i);
  return retVal;
}