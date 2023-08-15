/*QUESTION: By considering the terms in the Fibonacci sequence whose values do not
exceed four million, find the sum of the even-valued terms.*/

function sumEvenFibonacci(limit) {
    let sum = 0;
    let fib1 = 1;
    let fib2 = 1;

    while (fib2 <= limit) {
        if (fib2 % 2 === 0) {
            sum += fib2;
        }

        let nextFib = fib1 + fib2;
        fib1 = fib2;
        fib2 = nextFib;
    }

    return sum;
}

const limit = 4000000;
const result = sumEvenFibonacci(limit);

console.log(`The sum of even-valued terms in the Fibonacci sequence whose values do not exceed ${limit} is: ${result}`);
