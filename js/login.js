//* interaction with Button

//*step-01:add click event Handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //*step:02-get the email address inside the email input field
    //*always remember  to use to get text from as input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // *console.log(email);

    //*step-03:get password from html
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //* console.log(password);

    //*step-04:danger:DO not veryfy email and password from client side
    if (email === 'shawmitra@gmail.com' && password === '123456') {
        // console.log('Valid user');
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid user');
    }
})