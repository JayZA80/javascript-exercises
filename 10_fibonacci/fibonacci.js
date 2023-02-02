const fibonacci = function(x) {
    let nums = [0, 1];
    for (let i = 1; i < x; i++) {
        let sum = nums[i] + nums[i - 1];
        nums.push(sum);
    }
    return nums[x];
};

// Do not edit below this line
module.exports = fibonacci;
