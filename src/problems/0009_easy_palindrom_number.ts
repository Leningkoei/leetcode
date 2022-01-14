/// Given an integer x, return true if x is palindrome integer.
/// An integer is a palindrome when it reads the same backward as forward.

export default function isPalindrome(x: number): boolean {
    const numStr = x.toString()
    const numReverseStr = x.toString().split('').reverse().join('')

    return numStr === numReverseStr
}
