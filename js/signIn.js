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