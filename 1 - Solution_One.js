/*QUESTION: Find the sum of all the multiples of 3 or 5 below 1000.
 */

function findMultiplesAndSum(limit) {
    let sum = 0;

    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

const limit = 1000;
const result = findMultiplesAndSum(limit);

console.log(`The sum of natural numbers below ${limit} that are multiples of 3 or 5 is: ${result}`);
//The multiples of 3 below 1000 are 3,6,9,12,15,18,21,24,27,30...
//The multiples of 5 below 1000 are 5,10,15,20,25,30,35,40,45...

//THE INTERSECTION OF THE TWO GVES US 15,30,45