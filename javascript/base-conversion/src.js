// http://codewars.com/kata/526a569ca578d7e6e300034e

function convert(input, sourceAlph, targetAlph) {

  var inputInDecimal = convertToDecimal(input, sourceAlph);

  return convertToTarget(inputInDecimal, targetAlph);

}

function convertToDecimal(input, sourceAlph) {

  var
    sourcePositionMap = getPositionMap(sourceAlph),
    sourceBase = sourceAlph.length;

  return input.split('').reverse().map(function(sNumber) {
    return Number(sNumber);
  }).reduce(function(accum, item, index) {
    return accum + (Math.pow(sourceBase, index) * sourcePositionMap[item]);
  });

}

function convertToTarget(inputInDecimal, targetAlph) {

  var
    targetSymbolMap = getSymbolMap(targetAlph),
    targetBase = targetAlph.length,
    remainderPositions = [],
    dividend;

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