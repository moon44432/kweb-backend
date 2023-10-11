const factorial = n => {
    if (n == 1) return 1;
    else return n * factorial(n - 1);
};

const permutation = (n, r) => {
    return factorial(n) / factorial(n - r);
};

const multiPermutation = (n, r) => {
    return Math.pow(n, r);
};

const combination = (n, r) => {
    return factorial(n) / (factorial(n - r) * factorial(r));  
};

const multiCombination = (n, r) => {
    return combination(n + r - 1, r);
};

module.exports = {
    permutation: permutation,
    combination: combination,
    multiPermutation: multiPermutation,
    multiCombination: multiCombination,
};