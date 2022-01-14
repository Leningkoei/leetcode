/// Given a binary tree, find its minimum depth.
/// The minimum depth is the number of nodes along the shortest path from the
///     root node down to the nearest leaf node.
/// Note: A leaf is a node with no children.

import TreeNode from '../lib/TreeNode.js'

export default function minDepth(root: TreeNode | null): number {
    if (root) {
        const leftHeight = minDepth(root.left)
        const rightHeight = minDepth(root.right)

        if (leftHeight === 0 && rightHeight === 0) {
            return 1
        } else if (leftHeight === 0 || rightHeight === 0) {
            return Math.max(leftHeight, rightHeight) + 1
        } else {
            return Math.min(leftHeight, rightHeight) + 1
        }
    } else {
        return 0
    }
}
