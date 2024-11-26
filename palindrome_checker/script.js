const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

const palindrome = false;

const isPalindrome = (str) => {
  const invalid = /[^a-zA-Z0-9]/g;
  const str_lower = str.toLowerCase();
  const cleaned = str_lower.replace(invalid, '');
  return cleaned === cleaned.split('').reverse().join('');
}

checkButton.addEventListener("click", () => {
  const input = userInput.value;
  if (input === "") {
    alert("Please input a value");
  } else {
    const checker = isPalindrome(input);
    if (checker === true) {
      result.textContent = `${input} is a palindrome`;
    } else {
      result.textContent = `${input} is not a palindrome`;
    }
  }
})