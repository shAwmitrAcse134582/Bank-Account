document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    const balanceTotalElement = document.getElementById('balance-total');
    const previousbalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousbalanceTotalString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You Have no enough Money to withdraw')
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    WithdrawTotalElement.innerText = currentWithdrawTotal;


    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})