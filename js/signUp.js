function togglePasswordVisibility() {
    var newPassword = document.getElementById('mypassword');
    var passwordHidden = document.getElementById('hide1');
    var passwordVisible = document.getElementById('hide2');
    if(newPassword.type === 'password'){
        newPassword.type = "text";
        passwordHidden.style.display = "block";
        passwordVisible.style.display = "none";
    }
    else{
        newPassword.type = "password";
        passwordHidden.style.display = "none";
        passwordVisible.style.display = "block";
    }
}

function togglePasswordVisibility1(){
    var newPassword1 = document.getElementById('my_password');
    var passwordHidden1 = document.getElementById('hide3');
    var passwordVisible1 = document.getElementById('hide4');
    if(newPassword1.type === 'password'){
        newPassword1.type = "text";
        passwordHidden1.style.display = "block";
        passwordVisible1.style.display = "none";
    }
    else{
        newPassword1.type = "password";
        passwordHidden1.style.display = "none";
        passwordVisible1.style.display = "block";
    }
}