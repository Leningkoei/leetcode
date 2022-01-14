/// Given two binary string a and b, return their sum as a binary string.

export default function addBinary(a: string, b: string): string {
    // const numA = Number(`0b${a}`)
    // const numB = Number(`0b${b}`)

    // return (numA + numB).toString(2)

    const result: number[] = []

    a = a.split('').reverse().join('')
    b = b.split('').reverse().join('')
    const aLength: number = a.length
    const bLength: number = b.length

    let carry: number = 0
    for (let i: number = 0; i < Math.max(aLength, bLength); i++) {
        const aBit: number = a[i] ? Number(a[i]) : 0
        const bBit: number = b[i] ? Number(b[i]) : 0

        result.push(aBit ^ bBit ^ carry)
        carry = (aBit & bBit) || ((aBit | bBit) & carry)
    }

    if (carry) {
        result.push(1)
    }

    return result.reverse().join('')
}
