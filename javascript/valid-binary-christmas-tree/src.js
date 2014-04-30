// http://www.codewars.com/kata/52aebd2423b44356b8000578

function isValidTree(root) {

  if (root.ornament !== 'star')
    return false;

  if (!traverse(root.left))
    return false;

  return traverse(root.right);

}

function traverse(node) {

  if (!node)
    return true;

  if (!node.left && !node.right && node.color  !== 'blue')
    return false;
  if ((node.left || node.right) && node.color !== 'red')
    return false;

  if (!traverse(node.left))
    return false;

  return traverse(node.right);

}
