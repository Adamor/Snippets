var validateForm = function(){
    // Initial Varibles for input element and truthy value
    var valid = true; // Set inital validation to true
    var emailAddy = document.forms.input.email.value; // Variable to hold email address value
    var passwordVal = document.forms.input.password.value; // Variable to hold password value
    var emailError = document.getElementById("emailNotValid"); // Variable for to grab the span element for email message
    var passError = document.getElementById("passNotValid"); // Variable for to grab the span element for password message


    // Regex for Email validation
    var regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regPass = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/; // Numbers, lowercase, uppercase, special char, between 8-64 chars long.

    // Basic Email validation start 
    if(regEmail.test(emailAddy) === false){
        toggleClass(emailNotValid, 'hidden');
        valid = false;
    }
    else if (emailAddy === "" || emailAddy === null) {
        toggleClass(emailNotValid, 'hidden');
        valid = false;
    }

    // Basic Password validation start
    if(regPass.test(passwordVal) === false){
        toggleClass(passNotValid, 'hidden');
        valid = false;
    }
    else if (passwordVal === "" || passwordVal === null) {
        toggleClass(passNotValid, 'hidden');
        valid = false;
    }

    return valid;
};