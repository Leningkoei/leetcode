/// Given a m * n grid filled with non-negative numbers, find a path from top
///     left to bottom right, which minimizes the sum of all numbers along its
///     path.
/// Note: You can only move either down or right at any point in time.

export default function minPathSum(grid: number[][]): number {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            const previousTop: number = grid[y - 1] && grid[y - 1][x]
                ? grid[y - 1][x]
                : 0
            const previousLeft: number = grid[y][x - 1]
                ? grid[y][x - 1]
                : 0

            if (x && y) {
                // is edge === false
                grid[y][x] += Math.min(previousTop, previousLeft)
            } else {
                // is edge === true
                grid[y][x] += Math.max(previousTop, previousLeft)
            }
        }
    }

    return grid[grid.length][grid[0].length]
}
