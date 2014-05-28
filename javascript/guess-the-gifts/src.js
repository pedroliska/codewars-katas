// http://www.codewars.com/kata/52ae6b6623b443d9090002c8

function guessGifts(wishList, presents) {
  return wishList.filter(function(wishItem) {
    return presents.some(function(present) {
      return ['size','clatters','weight'].every(function(accum, prop) {
        return present[prop] == wishItem[prop];
      })
    });
  }).map(function(wishItem) {
    return wishItem.name;
  });
}
