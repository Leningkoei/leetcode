/// Given the `root` of a binary tree, return the sum of all left leaves.

import TreeNode from "src/lib/TreeNode.js";

const sumOfLeftLeaves = (root: TreeNode | null): number =>
  root?
    ((root.left && !(root.left.left || root.left.right))?
      root.left.val:
      0) + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right):
    0;

export default sumOfLeftLeaves;

