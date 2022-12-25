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


firstName.addEventListener('blur', () => {
    confirmation.textContent = '';
    if (firstName.value === '') {
        firstNameErrorMessage.textContent = 'Please enter your first name';
        firstNameErrorMessage.classList.add('errorMessage');
        firstName.after(firstNameErrorMessage);
        firstName.style.cssText = 'border: 2px solid red;';
    } else {
        firstNameErrorMessage.textContent = '';
    }
}); 

firstName.addEventListener('focus', () => {
    firstNameErrorMessage.textContent = '';
    firstName.style.border = 'none';
});

lastName.addEventListener('blur', (event) => {
    if (lastName.value === '') {
        lastNameErrorMessage.textContent = 'Please enter your last name';
        lastNameErrorMessage.classList.add('errorMessage');
        lastName.after(lastNameErrorMessage);
        lastName.style.cssText = 'border: 2px solid red';
    } else {
        lastNameErrorMessage.textContent = '';
    }
});

lastName.addEventListener('focus', () => {
    lastNameErrorMessage.textContent = '';
    lastName.style.border = 'none';
});

email.addEventListener('blur', (event) => {
    if (email.validity.typeMismatch) {
        emailErrorMessage.textContent = 'Please enter a valid email';
        emailErrorMessage.classList.add('errorMessage');
        email.after(emailErrorMessage);
        email.style.cssText = 'border: 2px solid red';
    } else {
        emailErrorMessage.textContent = '';
    }
});

email.addEventListener('focus', (event) => {
    emailErrorMessage.textContent = '';
    email.style.border = 'none';
});

phone.addEventListener('blur', (event) => {
    if (phone.validity.patternMismatch) {
        phoneErrorMessage.textContent = 'Please enter a valid phone number';
        phoneErrorMessage.classList.add('errorMessage');
        phone.after(phoneErrorMessage);
    } else {
        phoneErrorMessage.textContent = '';
    }
}); 

phone.addEventListener('focus', (event) => {
    phoneErrorMessage.textContent = '';
    phone.style.border = 'none';
});

password.addEventListener('blur', (event) => {
    if (password.validity.patternMismatch) {
        passwordErrorMessage.textContent = 'Must inlcude 1 number, 1 capital letter, at least 8 characters';
        passwordErrorMessage.classList.add('pwdErrorMessage');
        showPwdDiv.after(passwordErrorMessage);
    } else {
        passwordErrorMessage.textContent = '';
    }
});

password.addEventListener('focus', (event) => {
    passwordErrorMessage.textContent = '';
    password.style.border = 'none';
});

confirmPassword.addEventListener('blur', (event) => {
    if (password.value !== confirmPassword.value) {
        confirmPasswordErrorMessage.textContent = 'Passwords do not match';
        confirmPasswordErrorMessage.classList.add('pwdErrorMessage');
        confirmPassword.after(confirmPasswordErrorMessage);
    } else {
        confirmPasswordErrorMessage.textContent = '';
    }
});

confirmPassword.addEventListener('focus', (event) => {
    confirmPasswordErrorMessage.textContent = '';
    confirmPassword.style.border = 'none';
});

form.addEventListener('submit', confirmAccountCreation);


function showPassword() {
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}

function confirmAccountCreation(event) {
    event.preventDefault();
    console.log('Test');
    confirmation.textContent = "Thank you for signing up with the Odin Café!";
    form.append(confirmation); 
    form.reset();
}