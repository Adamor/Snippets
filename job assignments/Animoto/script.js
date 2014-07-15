var validateForm = function(){
    // Initial Varibles for input element and truthy value
    var valid = true; // Set inital validation to True
    var emailAddy = document.forms.input.email.value; // Variable to hold email address value
    var passwordVal = document.forms.input.password.value; // Variable to hold password value

    // Regex for Email and Password validation
    var regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regPass = /^((?:[a-z][a-z]*[0-9]+[a-z0-9]*))/;

    // Basic Email validation start 
    if(regEmail.test(emailAddy) === false){
        alert ( "Please enter a vaild Email address." );
        valid = false;
    }
    else if (emailAddy === "" || emailAddy === null) {
        alert ( "Please enter a vaild Email address." );
        valid = false;
    }

    // Basic Password validation start
    if(regPass.test(passwordVal) === false){
        alert ( "Please enter a vaild Password." );
        valid = false;
    }
    else if (passwordVal === "" || passwordVal === null) {
        alert ( "Please enter a vaild Password." );
        valid = false;
    }

    return valid;
    };