// Step: 01 add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // Step: 02 get the deposit amount from the deposit input field
  // for input field use .value to the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  depositField.value = "";
  // Steps: 07 Clear the deposit field
  if (isNaN(newDepositAmount)) {
    alert("Please Provide a valid number");
    return;
  }

  // Step: 03 get the current deposit total
  // for none input(element other then input, textarea) use innerText to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step: 05 get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // Step: 04 add numbers to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;

  // step: 06 calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
});
