function RNG(upperLimit) {
  this.upperLimit = upperLimit;
  this.usedNumbers = [];
}

RNG.prototype.rand = function() {
  var retVal, 
      found = false;

  if (this.usedNumbers.length >= this.upperLimit)
    this.usedNumbers = [];

  do {
    retVal = randomInt(this.upperLimit);
    if (this.usedNumbers.indexOf(retVal) == -1) {
      found = true;
      this.usedNumbers.push(retVal);
    }
  }
  while(found);
  return retVal;
}

function randomInt(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}
