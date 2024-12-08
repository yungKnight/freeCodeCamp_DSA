const convertBtn = document.getElementById("convert-btn");
const input = document.getElementById("number");
const result = document.getElementById("output");

const convertInput = (numberInput) => {
  switch (numberInput) {
    case 1: 
      return "I"
      break;
    case 5: 
      return "V"
      break;
    case 10: 
      return "X"
      break;
    case 50: 
      return "L"
      break;
    case 100: 
      return "C"
      break;
    case 500: 
      return "D"
      break;
    case 1000: 
      return "M"
      break;
    default:
      return ""
  }
}

const confirmValidInput = (numberInput) => {
  console.log(numberInput)

  if (numberInput.length === 0 ) {
    result.innerText = "Please enter a valid number"
  } else if (numberInput < 1) {
    result.innerText = "Please enter a number greater than or equal to 1"
  } else if (numberInput >= 4000) {
    result.innerText = "Please enter a number less than or equal to 3999"
  } else {
    result.innerText = convertInput(parseInt(numberInput));
  }
}

convertBtn.addEventListener("click", () => {
  const numberInput = input.value; 

  confirmValidInput(numberInput);
});