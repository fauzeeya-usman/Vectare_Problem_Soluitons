/* What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?*/

function greatestCommonDivisor(a, b) {
    if (b === 0) {
        return a;
    }
    return greatestCommonDivisor(b, a % b);
}

function leastCommonMultiple(a, b) {
    return (a * b) / greatestCommonDivisor(a, b);
}

function findSmallestMultiple(limit) {
    let result = 1;
    for (let i = 2; i <= limit; i++) {
        result = leastCommonMultiple(result, i);
    }
    return result;
}

const upperLimit = 20;
const smallestMultiple = findSmallestMultiple(upperLimit);

console.log(`The smallest positive number evenly divisible by all of the numbers from 1 to ${upperLimit} is: ${smallestMultiple}`);
