/// Given the roots of two binary tree p and q, write a function to check if they
///     are the same or not.
/// Two binary trees are considered the same if they are structurally identical,
///     and the nodes have the same value.

import TreeNode from '../lib/TreeNode.js'

export default function isSameTree(
    p: TreeNode | null,
    q: TreeNode | null
): boolean {
    if (p === null && q === null) {
        return true
    } else if (p || q) {
        return false
    } else if (p.val !== q.val) {
        return false
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
}

// export default function isSameTree(
//     p: TreeNode | null,
//     q: TreeNode | null
// ): boolean {
//     const pPreOrderTravelResultSet: (number | null)[] = []
//     const qPreOrderTravelResultSet: (number | null)[] = []

//     preOrderTravel(p, pPreOrderTravelResultSet)
//     preOrderTravel(q, qPreOrderTravelResultSet)

//     return (
//         pPreOrderTravelResultSet.join(',') ===
//         qPreOrderTravelResultSet.join(',')
//     )

//     // if (
//     //     pPreOrderTravelResultSet.join(',') !==
//     //     qPreOrderTravelResultSet.join(',')
//     // ) {
//     //     return false
//     // }

//     // const pInOrderTravelResultSet: (number | null)[] = []
//     // const qInOrderTravelResultSet: (number | null)[] = []

//     // inOrderTravel(p, pInOrderTravelResultSet)
//     // inOrderTravel(q, qInOrderTravelResultSet)

//     // if (
//     //     pInOrderTravelResultSet.join(',') !==
//     //     qInOrderTravelResultSet.join(',')
//     // ) {
//     //     return false
//     // }

//     // return true
// }

// function preOrderTravel(root: TreeNode | null, resultSet: (number | null)[]) {
//     if (root) {
//         resultSet.push(root.val)
//         preOrderTravel(root.left, resultSet)
//         preOrderTravel(root.right, resultSet)
//     } else {
//         resultSet.push(null)
//     }
// }
// // function inOrderTravel(root: TreeNode | null, resultSet: (number | null)[]) {
// //     if (root) {
// //         inOrderTravel(root.left, resultSet)
// //         resultSet.push(root.val)
// //         inOrderTravel(root.right, resultSet)
// //     } else {
// //         resultSet.push(null)
// //     }
// // }
