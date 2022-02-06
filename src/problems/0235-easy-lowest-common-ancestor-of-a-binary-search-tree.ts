/// Given a binary search tree (BST), find the lowest common ancestor (LCA) of
///     two given nodes in the BST.

export default function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    if (root) {
        const currentVal: number = root.val;
        const pVal: number | undefined = p ? p.val : undefined;
        const qVal: number | undefined = q ? q.val : undefined;

        if (
            pVal <= currentVal && qVal >= currentVal ||
            pVal >= currentVal && qVal <= currentVal
        ) {
            return root;
        } else if (pVal <= currentVal && qVal <= currentVal) {
            return lowestCommonAncestor(root.left, p, q);
        } else if (pVal >= currentVal && qVal >= currentVal) {
            return lowestCommonAncestor(root.right, p, q);
        };
    } else {
        return null;
    };
};

