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
