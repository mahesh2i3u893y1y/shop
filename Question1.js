class WhiteBox {
    constructor(top, left, height, width) {
        this.top = top;
        this.left = left;
        this.height = height;
        this.width = width;
    }
}

function findWhiteBox(matrix) {
    let top = -1;
    let left = -1;
    let height = 0;
    let width = 0;

    // Finding the top-left corner of the white box
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 'w') {
                top = i;
                left = j;
                break;
            }
        }
        if (top !== -1) break;
    }

    // If top-left corner is found, determine height and width
    if (top !== -1) {
        height = 1;
        width = 1;

        // Determining height
        for (let i = top + 1; i < matrix.length; i++) {
            if (matrix[i][left] === 'w') {
                height++;
            } else {
                break;
            }
        }

        // Determining width
        for (let j = left + 1; j < matrix[top].length; j++) {
            if (matrix[top][j] === 'w') {
                width++;
            } else {
                break;
            }
        }
    }

    return new WhiteBox(top, left, height, width);
}

// Example usage:
const matrix = [
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
];

const whiteBox = findWhiteBox(matrix);
console.log(whiteBox);