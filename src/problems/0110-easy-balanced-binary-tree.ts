/// Given a binary tree, determine if it is height-balanced.
/// For this problem, a height-balanced binary tree is defined as:
///     a binary tree in which the left and right subtrees of every node differ
///         in height by no more 1.

import TreeNode from '../lib/TreeNode.js'

export default function isBalanced(root: TreeNode | null): boolean {
    if (isBalancedKai(root) !== false) {
        return true
    } else {
        return false
    }
}

function isBalancedKai(root: TreeNode | null): number | false {
    if (root) {
        const leftHeight = isBalancedKai(root.left)
        const rightHeight = isBalancedKai(root.right)

        if (leftHeight !== false && rightHeight !== false) {
            if (Math.abs(leftHeight - rightHeight) <= 1) {
                return Math.max(leftHeight, rightHeight) + 1
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return 0
    }
}
