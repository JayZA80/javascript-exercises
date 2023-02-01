const alphaNum = (string) => {
    return string.replace(/[^a-z0-9]/gi, '');
}

const palindromes = function (string) {
    let string1 = alphaNum(string).toLowerCase();
    let stringChars = Array.from(string1);
    stringChars.reverse();
    let string2 = alphaNum(stringChars.join()).toLowerCase();
    if (string1 === string2) {
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
