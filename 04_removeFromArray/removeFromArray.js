const removeFromArray = function(array, ...x) {
    x.map(num => { // loop through rest parameters first using map. map is an iterative loop allows you to execute a function on the current item
        for(let i = 0; i < array.length; i++){ // loop through array now to check for a match
            if (array[i] === num) {
                array.splice(i, 1);
            }
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
