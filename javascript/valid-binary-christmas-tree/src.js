// http://www.codewars.com/kata/52aebd2423b44356b8000578
//Test Failed: Test failed for following tree: {"ornament":"star","color":"yellow","left":{"ornament":"candy cane","color":"blue"},"right":{"ornament":"stocking","color":"blue"}} - Expected: true, instead got: false

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

  if (!node.left && !node.right && node.ornament  !== 'blue')
    return false;
  if ((node.left || node.right) && node.ornament !== 'red')
    return false;

  if (!traverse(node.left))
    return false;

  return traverse(node.right);

}
