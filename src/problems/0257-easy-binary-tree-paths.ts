/// Given the root of a binary tree, return all root-to-leaf paths in any order.
/// A leaf is a node with no children.

export default function binaryTreePaths(root: TreeNode | null): string[] {
    if (root) {
        return dfs(root, []);
    } else {
        return [];
    };
};

function dfs(root: TreeNode | null, path: number[]): string[] {
    path = [ ...path, root.val ];

    const left: string[] = root.left ? dfs(root.left, path) : [];
    const right: string[] = root.right ? dfs(root.right, path) : [];

    if (left.length || right.length) {
        return [ ...left, ...right ];
    } else {
        return [ path.join("->") ];
    };
};

