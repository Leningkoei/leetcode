/// A string is a valid parentheses string(denoted VPS) if it meets one of the
///     following:
///
///     * It is an empty string '', or a single character not equal to '(' or
///         ')'
///     * It can be written as AB(A concatenated with B), where A and B are
///         VPS's
///     * It can be written as (A), where A is a VPS
/// We can similarly define the nesting depth depth(s) of any VPS s as follows:
///     * depth('') = 0
///     * depth(c) = 0, where c is a string with a single character not equal to
///         '(', ')'
///     * depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's
///     * depth('(' + A + ')') = 1 + depth(A), where A is a VPS
/// For example, '', '()()', and '()(()())' are VPS's (with nesting depths 0, 1,
///     and 2), and '(()' are not VPS's
/// Given a VPS represented as string s, return the nesting depth of s

export default function maxDepth(s: string): number {
    let result: number = 0
    let currentDepth: number = 0

    for (const char of s) {
        if (char === '(') {
            currentDepth += 1

            result = Math.max(currentDepth, result)
        } else if (char === ')') {
            currentDepth -= 1
        }
    }

    return result
}
