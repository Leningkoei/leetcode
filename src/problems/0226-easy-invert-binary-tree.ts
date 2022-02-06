/// Given the root of a binary tree, invert the tree, and returns its root.

import TreeNode from "../lib/TreeNode.ts";

export default function inverTree(root: TreeNode | null): TreeNode | null {
    if (root) {
        const left: TreeNode = inverTree(root.left);
        const right: TreeNode = inverTree(root.right);

        root.left = right;
        root.right = left;
    };

    return root;
};

// export default function invertTree(root: TreeNode | null): TreeNode | null {
//     dfs(root);
// 
//     return root;
// };
// 
// function dfs(root: TreeNode | null) {
//     if (root) {
//         const left: TreeNode = root.left;
//         const right: TreeNode = root.right;
// 
//         dfs(left);
//         dfs(right);
// 
//         root.left = right;
//         root.right = left;
//     };
// };

