const repeatString = function(string, num) {
    let newString = '';
    for(let i = 0; i < num; i++){
        newString += string; // use += to append to a string
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
