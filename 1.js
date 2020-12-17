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

// #5 12/17/20 facebook likes feature https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
function likes(names) {
  let array = [];
  names.map((name, index) => {
    if (index !== names.length - 1 && names.length < 4 && names.length > 1) {
      array.push(name);
    }
    if (index == names.length - 1 && names.length < 4 && names.length > 1) {
      array.push("and " + name);
    }
    if (names.length > 3) {
      if (index < 2) {
        array.push(name);
      }
    }
    if (names.length == 1) {
      array.push(name + " likes this");
    }
  });
  if (names.length > 3) {
    array.push("and " + (names.length - 2) + " others like this");
  }
  if (names === undefined || names.length == 0) {
    array.push("no one likes this");
  }
  if (names.length == 2) {
    return array.join().replace(/,/g, " ") + " like this";
  }
  if (names.length === 3) {
    return (
      array.join().replace(/,/g, ", ").replace(/, and/g, " and") + " like this"
    );
  } else {
    return array.join().replace(/,/g, ", ").replace(/, and/g, " and");
  }
}

// #6 checks if string is isogram
function isIsogram(str) {
  const low = str.toLowerCase();
  for (let i = 0; i < low.length; i++) {
    for (let j = 0; j < low.length; j++) {
      if (low[i] === low[j] && i != j) {
        return false;
      }
    }
  }
  return true;
}

// #7 Iq test returns index of unique item https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript

function iqTest(numbers) {
  let trueAmt = 0;
  let falseAmt = 0;
  const x = [];
  let y = numbers.split(" ");
  y.map((item, index) => {
    if (item % 2 === 0) {
      x.push(false);
    } else {
      x.push(true);
    }
  });
  x.map((item) => {
    if (item === true) {
      trueAmt++;
    } else if (item === false) {
      falseAmt++;
    }
  });
  if (trueAmt < falseAmt) {
    return x.indexOf(true) + 1;
  } else if (trueAmt > falseAmt) {
    return x.indexOf(false) + 1;
  }
}
