const findTheOldest = function(list) {
    let sortedList = list.sort(function(a, b) {
        if (a.yearOfDeath === undefined) {
          a.yearOfDeath = new Date().getFullYear();
        } else if (b.yearOfDeath === undefined) {
          b.yearOfDeath = new Date().getFullYear();
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy - nextGuy;
      });
    return sortedList[sortedList.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
