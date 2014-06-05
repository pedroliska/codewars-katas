// http://codewars.com/kata/526a569ca578d7e6e300034e

function convert(input, sourceAlph, targetAlph) {
  var
    sourcePositionMap = getPositionMap(sourceAlph),
    targetSymbolMap = getSymbolMap(targetAlph),
    sourceBase = sourceAlph.length,
    targetBase = targetAlph.length,
    remainderPositions = [],
    dividend,
    inputInDecimal;


  // convert to decimal base
  inputInDecimal = input.split('').reverse().reduce(function(accum, item, index) {
    return accum + (Math.pow(sourceBase, index) * sourcePositionMap[item]);
  });

  // convert to target base
  dividend = inputInDecimal;
  do {
    remainderPositions.push(dividend % targetBase);
    dividend = Math.floor(dividend / targetBase);
  } while (dividend > 0);
  return remainderPositions.map(function(position) {
    return targetSymbolMap[position];
  }).join('');
}
function getPositionMap(alph) {
  return mapper(alph, function(accum, item, index) {
    accum[item] = index;
    return accum;
  });
}
function getSymbolMap(alph) {
  return mapper(alph, function(accum, item, index) {
    accum[index] = item;
    return accum;
  });
}
function mapper(alph, reduceFn) {
  return alph.split('').reduce(reduceFn, {});
}