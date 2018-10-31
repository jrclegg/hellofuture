
// if the browser supports the local storage API
if (window.localStorage) {

    // get form elements
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');

    // Elements populated by local storage data
    // localStorage.getItem returns the current value of the element with a class of name
    // localStorage.getItem returns the current value of the element with a class of email
    name.value = localStorage.getItem('.name');
    email.value = localStorage.getItem('.email');



    // Name data saved
    name.addEventListener('input', function () {

        // When an input event fires on the input the form will save the data to the localStorage object
        localStorage.setItem('.name', name.value);

    }, false);


    // Email data saved
    email.addEventListener('input', function () {

        // When an input event fires on the input the form will save the data to the localStorage object
        localStorage.setItem('.email', email.value)
    }, false);
}