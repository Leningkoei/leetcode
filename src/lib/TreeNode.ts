export default class TreeNode {
    constructor(
        val: number | null,
        left: TreeNode | null,
        right: TreeNode | null
    ) {
        this.val = val
        this.left = left
        this.right = right
    }

    public val: number | null = null
    public left: TreeNode | null = null
    public right: TreeNode | null = null
}

// pre order
// in order
// post order
