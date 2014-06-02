function convert(input, sourceAlph, targetAlph) {

  var
    sourcePositionMap = getPositionMap(sourceAlph),
    targetPositionMap = getPositionMap(targetAlph),
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
    return targetPositionMap[position];
  }).reverse().join('');
}

function getPositionMap(alph) {
  return alph.split('').reduce(function (accum, item, index) {
    accum[item] = index;
    return accum;
  }, {});
}