/* Find the largest palindrome made from the product of two 3-digit
numbers.*/

function isPalindrome(number) {
    const str = number.toString();
    const length = str.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }

    return true;
}

function findLargestPalindromeProduct() {
    let largestPalindrome = 0;

    for (let i = 999; i >= 100; i--) {
        for (let j = 999; j >= 100; j--) {
            const product = i * j;
            if (product <= largestPalindrome) {
                // Since we're iterating from largest numbers downwards,
                // we can break the inner loop when the product becomes smaller than the largest palindrome found.
                break;
            }
            if (isPalindrome(product) && product > largestPalindrome) {
                largestPalindrome = product;
            }
        }
    }

    return largestPalindrome;
}

const largestPalindromeProduct = findLargestPalindromeProduct();
console.log(`The largest palindrome made from the product of two 3-digit numbers is: ${largestPalindromeProduct}`);
