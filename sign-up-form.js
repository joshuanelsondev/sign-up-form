const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirmPwd');
const submit = document.querySelector(' #submit');
const firstNameErrorMessage = document.createElement('p');
const lastNameErrorMessage = document.createElement('p');
const emailErrorMessage = document.createElement('p');
const phoneErrorMessage = document.createElement('p');
const passwordErrorMessage = document.createElement('p');
const confirmPasswordErrorMessage = document.createElement('p');
const showPwdCheckbox = document.querySelector('.showPwdCheckbox');
const showPwdDiv = document.querySelector('.showPwdDiv');
const submitButton = document.querySelector('.submit');
const confirmation = document.createElement('div');
confirmation.classList.add('confirm');
const form = document.querySelector('form');
let validCounter = 0;



firstName.addEventListener('input', () => {
    
    if (firstName.value === '') {
        console.log('test');
        firstNameErrorMessage.textContent = 'Please enter your first name';
        firstNameErrorMessage.classList.add('errorMessage');
        firstName.after(firstNameErrorMessage);
    } else {
        firstNameErrorMessage.textContent = '';
        validCounter++;
    }
}); 

lastName.addEventListener('input', (event) => {
    if (lastName.value === '') {
        lastNameErrorMessage.textContent = 'Please enter your last name';
        lastNameErrorMessage.classList.add('errorMessage');
        lastName.after(lastNameErrorMessage);
    } else {
        lastNameErrorMessage.textContent = '';
        validCounter++;

    }
});

email.addEventListener('input', (event) => {
    if (email.validity.typeMismatch) {
        emailErrorMessage.textContent = 'Please enter a valid email';
        emailErrorMessage.classList.add('errorMessage');
        email.after(emailErrorMessage);
    } else {
        emailErrorMessage.textContent = '';
        validCounter++;

    }
});

phone.addEventListener('input', (event) => {
    if (phone.validity.patternMismatch) {
        phoneErrorMessage.textContent = 'Please enter a valid phone number';
        phoneErrorMessage.classList.add('errorMessage');
        phone.after(phoneErrorMessage);
    } else {
        phoneErrorMessage.textContent = '';
        validCounter++;

    }
});

password.addEventListener('input', (event) => {
    if (password.validity.patternMismatch) {
        passwordErrorMessage.textContent = 'Must inlcude 1 number, 1 capital letter, at least 8 characters';
        passwordErrorMessage.classList.add('pwdErrorMessage');
        showPwdDiv.after(passwordErrorMessage);
    } else {
        passwordErrorMessage.textContent = '';
        validCounter++;

    }
});

confirmPassword.addEventListener('input', (event) => {
    if (password.value !== confirmPassword.value) {
        confirmPasswordErrorMessage.textContent = 'Passwords do not match';
        confirmPasswordErrorMessage.classList.add('pwdErrorMessage');
        confirmPassword.after(confirmPasswordErrorMessage);
    } else {
        confirmPasswordErrorMessage.textContent = '';
        validCounter++;

    }
});

submitButton.addEventListener('click', confirmAccountCreation);


function showPassword() {
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}

function confirmAccountCreation(event) {
    event.preventDefault();
    if (validCounter > 5 && confirmation.textContent == '') {
        confirmation.textContent = "Thank you for signing up with the Odin Café!";
        form.append(confirmation);
        setInterval(() => {
            confirmation.textContent = '';
        }, '10000');
        validCounter = 0;
    }
    form.reset();
    
}