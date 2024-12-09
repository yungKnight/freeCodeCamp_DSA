const convertBtn = document.getElementById("convert-btn");
const input = document.getElementById("number");
const result = document.getElementById("output");

const romanBasicValues = [
  {
    number: 1,
    value: "I"
  },

  {
    number: 4,
    value: "IV",
  },

  {
    number: 5,
    value: "V",
  },

  {
    number: 9,
    value: "IX",
  },

  {
    number: 10,
    value: "X",
  },

  {
    number: 40,
    value: "XL",
  },

  {
    number: 50,
    value: "L",
  },

  {
    number: 90,
    value: "XC",
  },

  {
    number: 100,
    value: "C",
  },

  {
    number: 400,
    value: "CD",
  },

  {
    number: 500,
    value: "D",
  },

  {
    number: 900,
    value: "CM",
  },

  {
    number: 1000,
    value: "M",
  },
]

const calculateRomanNumValue = (numberInput) => {
  if (numberInput >= 1 && numberInput < 4000) {
    let remaining = numberInput;
    let romanResult = "";

    for (const { number, value } of romanBasicValues.slice().reverse()) {
      while (remaining >= number) {
        romanResult += value;
        remaining -= number;
      }
    }
    return romanResult;
  } else {
    return "";
  }
};

console.log(calculateRomanNumValue(2623))

const convertInput = (numberInput) => {
  switch (numberInput) {
    case 1:
      return "I";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 9:
      return "IX";
    case 10:
      return "X";
    case 40:
      return "XL";
    case 50:
      return "L";
    case 90:
      return "XC";
    case 100:
      return "C";
    case 400:
      return "CD";
    case 500:
      return "D";
    case 900:
      return "CM";
    case 1000:
      return "M";
    default:
      return calculateRomanNumValue(numberInput);
  }
};

const confirmValidInput = (numberInput) => {
  const parsedInput = parseInt(numberInput);
  if (isNaN(parsedInput)) {
    result.innerText = "Please enter a valid number";
  } else if (parsedInput < 1) {
    result.innerText = "Please enter a number greater than or equal to 1";
  } else if (parsedInput >= 4000) {
    result.innerText = "Please enter a number less than or equal to 3999";
  } else {
    result.innerText = convertInput(parsedInput);
  }
};

convertBtn.addEventListener("click", () => {
  const numberInput = input.value;
  confirmValidInput(numberInput);
});
