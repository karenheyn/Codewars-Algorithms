// #1 10/8/20 create a space in camelcase. "helloWorld" => "hello World"
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

// #2 10/8/20 checks if anagram
var isAnagram = function (test, original) {
  let testArray = test.toLowerCase().split("").sort().join("");
  let origArray = original.toLowerCase().split("").sort().join("");
  if (testArray == origArray) {
    return true;
  } else return false;
};

// #3 10/9/20 removes non-numbers
function filter_list(l) {
  return l.filter(Number.isInteger);
}

// #4 12/5/20 return index of capital letters
var capitals = function (word) {
  let indexArray = [];
  word.split("").map((letter, index) => {
    if (letter.toUpperCase() === letter) {
      indexArray.push(index);
    }
  });
  return indexArray;
};
