function convert(input, sourceAlph, targetAlph) {

  var sourcePositionMap = getPositionMap(sourceAlph);
  var targetPositionMap = getPositionMap(targetAlph);

  // convert decimal base

  var inputInDecimal = input.split('').reverse().reduce(function(accum, item, index) {
    return accum 
      + (Math.pow(sourceAlph.length, index) * sourcePositionMap[item]);
  }, 0);

  return inputInDecimal;
  // convert to target base

  return "asdf";
}
function getPositionMap(alph) {
  return alph.split('').reduce(function (accum, item, index) {
    accum[item] = index;
    return accum;
  }, {});
}