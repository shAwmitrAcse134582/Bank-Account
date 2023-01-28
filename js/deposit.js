//*step-01:add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //*step-02:get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    console.log(depositAmount);

    //*step-3:get the current deposit total
    //*for non input tag use innerText to get the text
    const depositTotalAmount = document.getElementById('deposit-total');
    const depositTotal = depositTotalAmount.innerText;
    depositTotalAmount.innerText = depositAmount;


})