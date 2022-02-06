/// Given the root of a binary tree, return the preorder traversal of its node's
///     values.

import TreeNode from '../lib/TreeNode.js'

export default function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []

    preorderTravel(root, result)

    return result
}

function preorderTravel(root: TreeNode | null, result: number[]) {
    if (root) {
        result.push(root.val)
        preorderTravel(root.left, result)
        preorderTravel(root.right, result)
    }
}
