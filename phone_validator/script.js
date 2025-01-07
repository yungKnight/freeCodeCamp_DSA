const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const result = document.getElementById('results-div');
const areaCodeElement = document.getElementById('area-code');

const phoneRegex = /^(?:1?\s?)?(\(\d{3}\)|\d{3})(?:[\s\-]?)\d{3}[\s\-]?\d{4}$/;
const areaRegex = /[()]/g;

const validNumber = (num) => phoneRegex.exec(num);

checkButton.addEventListener("click", () => {
  const userNumber = userInput.value;
  if (userNumber === "") {
    alert("Please provide a phone number.");
    return;
  }

  const match = validNumber(userNumber);

  if (match) {
    const [fullMatch,  areaCode] = match;
    const cleanedAreaCode = areaCode.replace(areaRegex, '');

    result.textContent = `Valid US number: ${userNumber}`;
    areaCodeElement.textContent = `Area Code: ${cleanedAreaCode}`;
  } else {
    result.textContent = `Invalid US number: ${userNumber}`;    
    areaCodeElement.textContent = '';
  }
});

clearButton.addEventListener("click", () => {
  result.textContent = '';
  areaCodeElement.textContent = '';
});