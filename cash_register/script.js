let price = 19.5;

const purchaseBtn = document.getElementById('purchase-btn');
const userPayment = document.getElementById('cash');
const userBill = document.getElementById('total');
const changeDue = document.getElementById('change-due');

const currencyUnits = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const checkCashRegister = () => {
  // Get number values from inputs.
  let priceNum = price;
  let cashNum = Number(userPayment.value);

  console.log(`Price of items in customer's cart is $${priceNum.toFixed(2)} and customer wants to pay $${cashNum.toFixed(2)}`);

  if (cashNum < priceNum) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cashNum === priceNum) {
    changeDue.textContent = "No change due - customer paid with exact cash";
    return;
  }

  let change = Number((cashNum - priceNum).toFixed(2));
  console.log(`Total change needed: $${change}`);

  const totalCid = Number(cid.reduce((sum, [, amount]) => sum + amount, 0).toFixed(2));
  console.log(`Total cash in drawer: $${totalCid}`);

  if (totalCid === change) {
    const sortedUnits = Object.entries(currencyUnits)
      .sort(([, a], [, b]) => b - a);
    const closedOutput = sortedUnits
      .map(([unit]) => {
        const found = cid.find(item => item[0] === unit);
        return found ? [unit, found[1]] : [unit, 0];
      })
      .filter(([_, amount]) => amount > 0)
      .map(([unit, amount]) => `${unit}: $${amount}`)
      .join(" ");
    changeDue.textContent = `Status: CLOSED ${closedOutput}`;
    return;
  }

  const register = cid.reduce((acc, [unit, amount]) => {
    acc[unit] = amount;
    return acc;
  }, {});

  console.log("Initial register:", register);

  const sortedUnits = Object.entries(currencyUnits)
    .sort(([, a], [, b]) => b - a);

  const changeArray = [];

  for (const [unit, unitValue] of sortedUnits) {
    let amountUsed = 0;
    console.log(`\nAttempting to use ${unit}: value $${unitValue}, available: $${register[unit]}`);
    while (change >= unitValue && register[unit] > 0) {
      amountUsed += unitValue;
      change = Number((change - unitValue).toFixed(2));
      if (unitValue > 0) {
        register[unit] = Number((register[unit] - unitValue).toFixed(2));
      }
      console.log(`Used $${unitValue} of ${unit}. Total used: $${amountUsed}. Remaining change: $${change}. ${unit} left: $${register[unit]}`);
    }
    if (amountUsed > 0) {
      changeArray.push([unit, amountUsed]);
    }
  }

  console.log("\nChange breakdown:", changeArray);
  console.log("Register after dispensing change:", register);

  cid = cid.map(([unit]) => [unit, register[unit]]);
  console.log("Updated cid:", cid);

  if (change > 0) {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const formattedChange = changeArray
    .map(([unit, amount]) => `${unit}: $${amount}`)
    .join(" ");
  changeDue.textContent = `Status: OPEN ${formattedChange}`;
};

purchaseBtn.addEventListener("click", checkCashRegister);

userBill.addEventListener("change", () => {
  price = Number(userBill.value);
});