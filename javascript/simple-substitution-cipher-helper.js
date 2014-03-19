function SubstitutionCipher(abc1, abc2) {

  function getTranslator(abcFrom, abcTo) {

    var hash = {};
    abcFrom
      .split('')
      .forEach(function (fromItem, index) { 
          hash[fromItem] = abcTo[index]; 
      });

    return function(str) { 
      return str
        .split('')
        .map(function(chr) {
          if (hash.hasOwnProperty(chr))
            return hash[chr];
          else 
            return chr;
        })
        .join('');
    };

  }

  this.encode = getTranslator(abc1, abc2);
  this.decode = getTranslator(abc2, abc1);
}