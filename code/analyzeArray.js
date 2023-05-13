function analyzeArray(numArr) {
  if (inValidNumArr(numArr) === false) {
    return "not an array of numbers";
  } else {
    const average = avgOfArr(numArr);
    const min = minNumOfArr(numArr);
    const max = maxNumOfArr(numArr);
    const length = lengthOfArray(numArr);

    return {
      average,
      min,
      max,
      length,
    };
  }
}

function inValidNumArr(numArr) {
  let validArr = true;
  numArr.forEach((num) => {
    if (typeof num !== "number") {
      validArr = false;
    }
  });
  return validArr;
}

function avgOfArr(numArr) {
  const acc = numArr.reduce((acc, num) => {
    return acc + num;
  }, 0);
  const avg = Math.round(acc / lengthOfArray(numArr));
  return avg;
}

function minNumOfArr(numArr) {
  let min = numArr[0];
  numArr.map((num) => {
    if (num < min) {
      min = num;
    }
  });
  return min;
}

function maxNumOfArr(numArr) {
  let max = numArr[0];
  numArr.map((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
}

function lengthOfArray(numArr) {
  return numArr.length;
}

export default analyzeArray;
