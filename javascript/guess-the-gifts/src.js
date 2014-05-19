function guessGifts(wishlist, presents) {

  return wishlist.filter(function(listItem) {
    // for each wishlist item, see if it matches a present
    return presents.find(function(present) {
      return (listItem.size == present.size)
        && (listitem.clatters == present.clatters)
        && (listitem.weight == present.weight);
    });

  });

}