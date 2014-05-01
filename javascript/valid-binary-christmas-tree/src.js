// http://www.codewars.com/kata/52aebd2423b44356b8000578

function isValidTree(root) {
  return traverse(root, rootNodeCheck);
}

function rootNodeCheck(node) {
  return node.ornament === 'star';
}

function subNodeCheck(node) {
  if (!node.left && !node.right && node.color !== 'blue')
    return false;

  if ((node.left || node.right) && node.color !== 'red')
    return false;
  return true;
}

function traverse(node, validityCheckFn) {
  if (!node)
    return true;

  if (!validityCheckFn(node))
    return false;

  if (!traverse(node.left, subNodeCheck))
    return false;

  return traverse(node.right, subNodeCheck);
}