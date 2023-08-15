/*What is the 10,001st prime number? */

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function findNthPrime(n) {
    let count = 0, num = 2;

    while (count < n) {
        if (isPrime(num)) count++;
        num++;
    }

    return num - 1;
}

const targetNth = 10001;
const primeResult = findNthPrime(targetNth);

console.log(`The ${targetNth}st prime number is: ${primeResult}`);
