const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  const isEven = (sorted) => sorted.length % 2 === 0 ? true : false;
  if (isEven(sorted)) {
    const firstMiddleNumber = sorted[sorted.length / 2];
    const secondMiddleNumber = sorted[(sorted.length / 2) - 1];
    return getMean([firstMiddleNumber, secondMiddleNumber]);
  } else {
    const middleNumber = sorted[Math.floor(sorted.length / 2)];
    return middleNumber;
  }
}

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);

  document.querySelector("#mean").textContent = mean;
}