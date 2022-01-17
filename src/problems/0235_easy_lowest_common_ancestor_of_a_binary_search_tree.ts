/// Given a binary search tree (BST), find the lowest common ancestor (LCA) of
///     two given nodes in the BST.

export default function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    const current: number | undefined = root ? root.val : undefined;
    const left: number | undefined = root.left ? root.left.val : undefined;
    const right: number | undefined = root.right ? root.right.val : undefined;
    const pVal: number | undefined = p ? p.val : undefined;
    const qVal: number | undefined = q ? q.val : undefined;
};

