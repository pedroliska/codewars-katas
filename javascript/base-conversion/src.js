// http://codewars.com/kata/526a569ca578d7e6e300034e

function convert(input, sourceAlph, targetAlph) {

  var
    sourcePositionMap = getPositionMap(sourceAlph),
    targetSymbolMap = getSymbolMap(targetAlph),
    sourceBase = sourceAlph.length,
    targetBase = targetAlph.length,
    dividend,
    remainderPositions = [];

  // convert decimal base
  var inputInDecimal = input.split('').reverse().reduce(function(accum, item, index) {
    return accum 
      + (Math.pow(sourceBase, index) * sourcePositionMap[item]);
  }, 0);

  // convert to target base
  dividend = inputInDecimal;
  do {
    remainderPositions.push(dividend % targetBase);
    dividend = Math.floor(dividend / targetBase);
  } while (dividend > 0);
  return remainderPositions.map(function(position) {
    return targetSymbolMap[position];
  }).reverse().join('');
}

function getPositionMap(alph) {
  return mapper(alph, function(accum, item, index) { accum[item] = index; });
}
function getSymbolMap(alph) {
  return mapper(alph, function(accum, item, index) { accum[index] = item; });
}
function mapper(alph, reduceFn) {
  return alph.split('').reduce(function (accum, item, index) {
    reduceFn(accum, item, index);
    return accum;
  }, {});
}