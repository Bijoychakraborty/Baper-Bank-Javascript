// step-1...

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // empty field...
    withdrawField.value = '';

    // step-2....

    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalAmount.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalString);
    //   step-3 : calculate
    const newWithdrawTotal = previousWithdrawTotalAmount + newWithdrawAmount;
    withdrawTotalAmount.innerText = newWithdrawTotal;

    // step-4:
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousTotalBalance = parseFloat(previousBalanceTotalString);

    // step-5..
    const newBalanceTotal = previousTotalBalance - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})