function validateName() {
    const reg = /^[A-Za-z][A-Za-záéíóú']*$/;

    if (reg.test(document.querySelector('.name').value)) {
        return true;
    }
    return false;
}

function styleNameOkay() {

    const nameValidate = $('.name');
    const nameMessage = $('.nameMessage');

    nameValidate.addClass('validationOkay');
    nameValidate.removeClass('validationError');
    nameValidate.removeClass('default');

    nameMessage.addClass('nameOkay');
    nameMessage.removeClass('nameError');
}

function styleNameError() {

    const nameValidate = $('.name');
    const nameMessage = $('.nameMessage');

    nameValidate.addClass('validationError');
    nameValidate.removeClass('validationOkay');
    nameValidate.removeClass('default');

    nameMessage.addClass('nameError');
    nameMessage.removeClass('nameOkay');
}


function checkName(nameElement) {
    const isValid = validateName();

    if (isValid === false) {
        styleNameError(nameElement);
    } else {
        styleNameOkay();
    }
}


function validateEmail() {
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (reg.test(document.querySelector('.email').value)) {
        return true;
    }

    return false;
}


function styleEmail() {

    const emailValidate = $('.email');
    const emailError = $('.emailMessage');
    const isValid = validateEmail();

    if (isValid === true) {

        emailValidate.addClass('validationOkay');
        emailValidate.removeClass('validationError');
        emailValidate.removeClass('default');

        emailError.addClass('emailOkay');
        emailError.removeClass('emailError');
    } else {
        emailValidate.removeClass('validationOkay');
        emailValidate.removeClass('default');
        emailValidate.addClass('validationError');

        emailError.addClass('emailError');
        emailError.removeClass('emailOkay');
    }
}

function checkEmail() {
    validateEmail();
    styleEmail();
}


function styleCaptcha() {
    const verifyRecaptcha = document.getElementById('g-recaptcha-response').value;
    const errorMessage = $('.captchaMessage');
    // If the recaptcha has not been verified
    if (!verifyRecaptcha) {
        // display an error message
        errorMessage.removeClass('captchaOkay');
        errorMessage.addClass('captchaError');
    }
}

function validateForm() {
    let error = 0;
    const verifyRecaptcha = document.getElementById('g-recaptcha-response').value;

    const targetForm = $("form[name='contactForm']");
    const targetName = targetForm.find('.name');
    const targetEmail = targetForm.find(".email");

    if (!validateName(targetName)) {
        error += 1;
    }

    if (!validateEmail(targetEmail)) {
        error += 1;
    }

    if (error > 0) {
        return false;
    }

    if (verifyRecaptcha) {

        return true;
    }

    styleCaptcha();

    return false;
}

function validateAndSubmitForm(event) {
    const form = event.target;

    const isValid = validateForm();
    if (isValid) {
        form.submit();
        return true;
    }

    return false;
}


function setupSubmitHandler() {
    $("form[name='contactForm']").submit(validateAndSubmitForm);
}

setupSubmitHandler();

