let getArrayParams = (...arr) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  let avg;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = (sum + arr[i]);
    avg = +(sum / arr.length).toFixed(2) 
  }
  return { min: min, max: max, avg: avg };
}

let summElementsWorker = (...arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let differenceMaxMinWorker = (...arr) => {
  let difference = 0;
  if (arr.length === 0) {
    return difference;
  }
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  difference = max - min;
  return difference;
}

let differenceEvenOddWorker = (...arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else sumOddElement = sumOddElement + arr[i];
  }
  return sumEvenElement - sumOddElement;
}

let averageEvenElementsWorker = (...arr) => {
  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let result;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    sumEvenElement = sumEvenElement + arr[i];
    countEvenElement = countEvenElement + 1;
    }
  }
  
  result = +((sumEvenElement / countEvenElement).toFixed(2));
  
  return result;
}

  let makeWork = (arrOfArr, func) => {
    let maxWorkerResult = 0;
    for (let i = 0; i < arrOfArr.length; i++) {
      if (arrOgArr[i] > arrOgArr[i + 1]) {
        maxWorkerResult = arrOgArr[i]
      }
      let result = func(arrOgArr[i]);
      if (result > maxWorkerResult) {
        maxWorkerResult = result;
      }
    }
  }