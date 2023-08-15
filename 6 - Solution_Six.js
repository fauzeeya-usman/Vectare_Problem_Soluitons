/* Starting in the top left corner of a 20×20 grid, and only being able to move
to the right and down, how many such routes are there through a 20×20 grid? */

function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calculateFactorial(n - 1);
}

function calculateRoutes(grid) {
    const routes = calculateFactorial(2 * grid) / (calculateFactorial(grid) * calculateFactorial(grid));
    return routes;
}

const gridDimension = 20;
const numberOfRoutes = calculateRoutes(gridDimension);

console.log(`For a ${gridDimension}x${gridDimension} grid, there are ${numberOfRoutes} routes.`);
