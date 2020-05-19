let nameVal = false;
let zipVal = false;
let emailVal = false;
let phoneVal = false;



function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;

    
    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
        nameVal = false;
    } else {
        name.classList.remove('is-invalid');
        nameVal = true;
    }

    enableButton();
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    
    if(!re.test(email.value)) {
        email.classList.add('is-invalid');
        emailVal = false;
    } else {
        email.classList.remove('is-invalid');
        emailVal = true;
    }

    enableButton();
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^\d{3}[- ]?\d{3}[- ]?\d{3}$/;

    
    if(!re.test(phone.value)) {
        phone.classList.add('is-invalid');
        phoneVal = false;
    } else {
        phone.classList.remove('is-invalid');
        phoneVal = true;
    }

    enableButton();
}

function validateZip() {
    const zip = document.getElementById('zip');
    const re = /^[0-9]{2}-[0-9]{3}$/;

    
    if(!re.test(zip.value)) {
        zip.classList.add('is-invalid');
        zipVal = false;
    } else {
        zip.classList.remove('is-invalid');
        zipVal = true;
    }

    enableButton();
}



function enableButton() {
    const button = document.getElementById('button');

    if(nameVal === true && emailVal === true && phoneVal === true && zipVal === true) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}