/// Given a list of 24-hour clock time points in "HH:MM" format, return the
///     minimum minutes difference between any two time-points in the list.

export default function findMinDifference(timePoints: string[]): number {
    if (timePoints.length > 1440) {
        return 0;
    };

    timePoints.sort();

    let result: number = Infinity;

    for (let i: number = 0; i < timePoints.length - 1; i++) {
        const aH: number = Number(timePoints[i].substring(0, 2));
        const aM: number = Number(timePoints[i].substring(3, 5));
        const bH: number = Number(timePoints[i + 1].substring(0, 2));
        const bM: number = Number(timePoints[i + 1].substring(3, 5));

        result = Math.min(result, bH * 60 + bM - aH * 60 - aM);
    };

    const aH: number = Number(timePoints[0].substring(0, 2));
    const aM: number = Number(timePoints[0].substring(3, 5));
    const bH: number =
        Number(timePoints[timePoints.length - 1].substring(0, 2));
    const bM: number =
        Number(timePoints[timePoints.length - 1].substring(3, 5));

    result = Math.min(result, 1440 - bH * 60 - bM + aH * 60 + aM);

    return result;
};

