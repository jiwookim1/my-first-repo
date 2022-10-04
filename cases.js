const factorial = (num) => {
    let result = 1 
    for (let i = 1; i <= num; i++){
        result = result * i 
    }
    return result 
};

const permutation = (n,r) => {
    let result = factorial(n)/factorial(n-r);
    return result;
};

const combination = (n,r) => {
    let result = factorial(n)/(factorial(n-r)*factorial(r));
    return result 
}

const multiPermutation = (n,r) => {return n**r};

const multiCombination = (n,r) => {
    let upperPart = n + r - 1;
    return(combination(upperPart,r))
}

module.exports = {
    permutation,
    combination,
    multiCombination,
    multiPermutation
};