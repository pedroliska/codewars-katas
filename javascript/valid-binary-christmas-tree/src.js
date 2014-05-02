// http://www.codewars.com/kata/52aebd2423b44356b8000578

function isValidTree(root) {
  return traverse(root, rootCheck);
}
function traverse(node, nodeCheckFn) {
  return !node
    || (nodeCheckFn(node) 
      && traverse(node.left, childCheck) 
      && traverse(node.right, childCheck));
}
function rootCheck(node) {
  return node.ornament === 'star';
}
function childCheck(node) {
  return (!node.left && !node.right)
  ? node.color === 'blue'
  : node.color === 'red';
}