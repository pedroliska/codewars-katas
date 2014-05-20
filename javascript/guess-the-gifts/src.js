// http://www.codewars.com/kata/52ae6b6623b443d9090002c8

function guessGifts(wishlist, presents) {

  return wishlist.filter(function(listItem) {
    // for each wishlist item, see if it matches a present
    return presents.find(function(present) {
      return (listItem.size == present.size)
        && (listItem.clatters == present.clatters)
        && (listItem.weight == present.weight);
    });

  }).map(function(listItem) {
    return listItem.name;
  });

}

Array.prototype.find = function(checkFn) {
  for (var i = 0, value; i < this.length; i++) {
    value = this[i];

    if (checkFn(value))
      return value;
  }
  return undefined;
}