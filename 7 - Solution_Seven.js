/* Find the maximum total from top to bottom in triangle.txt, a 15K text file containing a triangle with one-hundred rows.*/

const fs = require('fs');

// Read the file content
fs.readFile('triangle.txt', 'utf8', (error, content) => {
    if (error) {
        console.error(error);
        return;
    }

    const triangle = content.trim().split('\n').map(row => row.split(' ').map(Number));
    const numRows = triangle.length;

    for (let row = numRows - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            triangle[row][col] += Math.max(triangle[row + 1][col], triangle[row + 1][col + 1]);
        }
    }

    const maxPathTotal = triangle[0][0];
    console.log(`The maximum total from top to bottom is: ${maxPathTotal}`);
});
