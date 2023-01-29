//*step-01:add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //*step-02:get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //*step-3:get the current deposit total
    //*for non input tag use innerText to get the text
    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //*step-04:total amount of deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalAmount.innerText = currentDepositTotal;


    //*step-7:clear deposit field
    depositField.value = '';


})