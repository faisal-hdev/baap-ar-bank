/* 
    1. add event handler with the withdraw button
    2. get the withdraw amount from the withdraw input field
    2.5 also make sure to convert the input into a number by using parseFloat
    3. get previous withdraw total
    4. calculate total withdraw amount 
    4.5 set total withdraw amount
    5. get the previous balance total
    6. calculate new balance total
    6.5 set the new balance total
    7. clear the input field
*/

// step: 01
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step: 02
  const withdrawField = document.getElementById("withdraw-field");
  const newWithDrawAmountString = withdrawField.value;
  const newWithDrawAmount = parseFloat(newWithDrawAmountString);

  // Step: 03
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousTotal = parseFloat(previousWithdrawTotalString);

  // Step: 04
  const currentWithdrawTotal = previousTotal + newWithDrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step: 05
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step: 06
  const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;

  // step: 07 clear the input field
  withdrawField.value = "";
});
