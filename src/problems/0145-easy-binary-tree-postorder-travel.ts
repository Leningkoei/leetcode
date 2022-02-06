/// Given the root of a binary tree, return the postorder traversal of its
///     nodes' values.

import TreeNode from "../lib/TreeNode.ts";

export default function postorderTravelsal(root: TreeNode | null): number[] {
    if (root) {
        const leftResult: number[] = postorderTravelsal(root.left);
        const rightResult: number[] = postorderTravelsal(root.right);

        return [ ...leftResult, ...rightResult, root.val ];
    } else {
        return [];
    };
};

