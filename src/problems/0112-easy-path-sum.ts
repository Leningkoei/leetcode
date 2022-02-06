/// Given the root of a binary tree and an integer targetSum, return true if the
///     tree has a root-to-leaf path such that adding up all the values along the
///     path equals targetSum.
/// A leaf is a node with no children.

import TreeNode from '../lib/TreeNode.js'

export default function hasPathSum(
    root: TreeNode | null,
    targetSum: number
): boolean {
    if (root) {
        if (root.left || root.right) {
            return (
                hasPathSum(root.left, targetSum - root.val) ||
                hasPathSum(root.right, targetSum - root.val)
            )
        // } else if (root.left || root.right) {
        //     return root.left
        //         ? hasPathSum(root.left, targetSum - root.val)
        //         : hasPathSum(root.right, targetSum - root.val)
        //     // return (
        //     //     root.left && hasPathSum(root.left, targetSum - root.val) ||
        //     //     root.right && hasPathSum(root.right, targetSum - root.val)
        //     // )
        } else {
            return targetSum === root.val
        }
    } else {
        return false
    }
}

function main() {
    console.log(null || false)
    console.log(false || null)
    console.log(hasPathSum(new TreeNode(
        1,
        new TreeNode(2, null, null),
        null
    ), 1))
}

main()
