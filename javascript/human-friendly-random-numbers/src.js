function RNG(upperLimit) {
  this.upperLimit = upperLimit;
  this.usedNumbers = [];
}

RNG.prototype.rand = function () {

  if (this.usedNumbers.length == this.upperLimit)
    this.usedNumbers = [];

  var retVal;
  do {
    retVal = getRandomInt(this.upperLimit);
  } while(this.usedNumbers.indexOf(retVal) != -1);

  this.usedNumbers.push(retVal);
  return retVal;

}

function getRandomInt(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}