function findSurvivor(total) {
    // Find the highest power of 2 less than or equal to total
    let power = 1;
    while (power * 2 <= total) {
        power *= 2;
    }

    // Calculate the survivor position
    return 2 * (total - power) + 1;
}

// Example usage:
const totalMan = 100;
const survivor = findSurvivor(totalMan);
console.log("The survivor is at position:", survivor);