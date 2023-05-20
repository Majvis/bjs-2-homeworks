const getArrayParams = (...arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, item) => sum + item);
  const avg = +(sum / arr.length).toFixed(2);
  return {max: max, min: min, avg: avg};
};

const summElementsWorker = (...arr) => {
  
  if (arr.length === 0) {
    return 0;
  };

  return arr.reduce((sum, item) => sum + item);
};

const differenceMaxMinWorker = (...arr) => {
  
  if (arr.length === 0) {
    return 0;
  };

  return Math.max(...arr) - Math.min(...arr);
};

const differenceEvenOddWorker = (...arr) => {
  
  if (arr.length === 0) {
    return 0;
  };
  
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
      };
  };
  
  return sumEvenElement - sumOddElement;
};

let averageEvenElementsWorker = (...arr) => {
  if (arr.length === 0) {
    return 0;
  };
  
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let result;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    sumEvenElement = sumEvenElement + arr[i];
    countEvenElement = countEvenElement + 1;
    };
  };
  
  return result = +((sumEvenElement / countEvenElement).toFixed(2));
};

const makeWork = (arrOfArr, func) => {
  let maxWorkerResult = -Infinity;
 
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    };
  };
  return maxWorkerResult;
};