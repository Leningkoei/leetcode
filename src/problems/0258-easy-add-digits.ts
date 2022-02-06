/// Given an integer num, repeatedly add all its digits until the result has
///     only one digit, and return it.

export default function addDigits(num: number) {
    if (num < 10) {
        return num;
    };

    const digits: string[] = num.toString().split("");

    return addDigits(digits.reduce(
        (
            accumulator,
            currentValue
        ) => accumulator + Number(currentValue),
        0
    ));
};

