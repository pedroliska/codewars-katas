function RNG(upper) {
  this.upper = upper;
  this.availableNumbers = [];
}
RNG.prototype.rand = function() {
  if (!this.availableNumbers.length)
    this.availableNumbers = initArray(this.upper);

  var randomIndex = randomInt(this.availableNumbers.length);
  var retVal = this.availableNumbers[randomIndex];
  this.availableNumbers.splice(randomIndex, 1);
  return retVal;
}

function initArray(upper) {
  var i, retVal = [];
  for (i = 0; i < upper; i++)
    retVal.push(i);
  return retVal;
}
function randomInt(upper) {
  return Math.floor(Math.random() * upper);
}