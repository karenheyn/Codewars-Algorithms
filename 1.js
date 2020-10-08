// #1 10/8/20
function solution(string) {
  let splitString = string.split("");
  let splitArray = [];
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === splitString[i].toUpperCase()) {
      splitArray.push(" ");
      splitArray.push(splitString[i]);
    } else {
      splitArray.push(splitString[i]);
    }
  }
  return splitArray.join("");
}

// #2 10/8/20
var isAnagram = function (test, original) {
  let testArray = test.toLowerCase().split("").sort().join("");
  let origArray = original.toLowerCase().split("").sort().join("");
  if (testArray == origArray) {
    return true;
  } else return false;
};
