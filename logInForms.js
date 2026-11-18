var usernameLogIn = "johnMarlowby";
var passwordLogIn = "testPassword!1";
var registerUser = localStorage.getItem("registerUsername");
var registerPass = localStorage.getItem("registerPassword");

function clearLocalStorage(){
    localStorage.clear();
    document.getElementById("clearLocal").innerHTML = "Local Storage Cleared!";
    setTimeout(function refreshPage() {location.reload();}, 2000);
}

const logInForm = document.getElementById("logInForm");
const registerForm = document.getElementById("registerForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameRegistrationInput = document.getElementById("usernameRegistration");
const passwordRegistrationInput = document.getElementById("passwordRegistration");


function goHome(){
    window.location.href = "index.html";
}
logInForm.addEventListener("submit", function logInVerify(){
    event.preventDefault();
    if (usernameInput.value === usernameLogIn && passwordInput.value === passwordLogIn){
        document.getElementById("logInMessage").style.color = "green";
        document.getElementById("logInMessage").textContent = "Login successful! Returning to home page...";
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", usernameInput.value);
        setTimeout(goHome, 3000);
    }
    else if (usernameInput.value === registerUser && passwordInput.value === registerPass){
        document.getElementById("logInMessage").style.color = "green";
        document.getElementById("logInMessage").textContent = "Login successful! Returning to home page...";
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", usernameInput.value);
        setTimeout(goHome, 3000);
    }
    else{
        document.getElementById("logInMessage").style.color = "red";
        document.getElementById("logInMessage").textContent = "Invalid username or password!";
    }
});

registerForm.addEventListener("submit", function registerVerify(){
    event.preventDefault();
    if (usernameRegistrationInput.value === "" || passwordRegistrationInput.value === ""){
        document.getElementById("registerMessage").style.color = "red";
        document.getElementById("registerMessage").textContent = "Please fill in all fields!";
    }
    else{
        document.getElementById("registerMessage").style.color = "green";
        document.getElementById("registerMessage").textContent = "Registration successful! Returning to home page...";
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", usernameRegistrationInput.value);
        localStorage.setItem("registerUsername", usernameRegistrationInput.value);
        localStorage.setItem("registerPassword", passwordRegistrationInput.value);
        setTimeout(goHome, 3000);
    }
});

function showPass(){
    if (passwordInput.type === "password"){
        passwordInput.type = "text";
        document.getElementById("eyeIcon").innerHTML = "<ion-icon name='eye-off-outline' id='showPass' onclick='showPass()' class='passwordFieldIcon'></ion-icon>";
    }
    else{
        passwordInput.type = "password";
        document.getElementById("eyeIcon").innerHTML = "<ion-icon name='eye-outline' id='showPass' onclick='showPass()' class='passwordFieldIcon'></ion-icon>";
    }
}

function registerShowPass(){
    if (passwordRegistrationInput.type === "password"){
        passwordRegistrationInput.type = "text";
        document.getElementById("registerEyeIcon").innerHTML = "<ion-icon name='eye-off-outline' id='showPass' onclick='registerShowPass()' class='passwordFieldIcon'></ion-icon>";
    }
    else{
        passwordRegistrationInput.type = "password";
        document.getElementById("registerEyeIcon").innerHTML = "<ion-icon name='eye-outline' id='showPass' onclick='registerShowPass()' class='passwordFieldIcon'></ion-icon>";
    }
}

const registerSwitch = document.getElementById("registrationForms");
const logInSwitch = document.getElementById("logInForms");

function openLogIn(){
    logInSwitch.style.display = "block";
    registerSwitch.style.display = "none";
}
function openRegister(){
    registerSwitch.style.display = "block";
    logInSwitch.style.display = "none";
}

var rememberUser = "";
var rememberPass = "";
var remembered = localStorage.getItem("rememberMe");
var rememberCheckbox = document.getElementById("remember");
var rememberRegisterCheckbox = document.getElementById("rememberRegister");

logInForm.addEventListener("submit", function rememeberMeLogIn(){
    if (rememberCheckbox.checked){
        localStorage.setItem("rememberMe", "true");
        localStorage.setItem("rememberUser", usernameInput.value);
        localStorage.setItem("rememberPass", passwordInput.value);
    }
    else{
        localStorage.setItem("rememberMe", "false");
        localStorage.removeItem("rememberUser");
        localStorage.removeItem("rememberPass");
    }
});

registerForm.addEventListener("submit", function rememberMeRegister(){  
    if (rememberRegisterCheckbox.checked){
        localStorage.setItem("rememberMe", "true");
        localStorage.setItem("rememberUser", usernameRegistrationInput.value);
        localStorage.setItem("rememberPass", passwordRegistrationInput.value);
    }
    else{
        localStorage.setItem("rememberMe", "false");
        localStorage.removeItem("rememberUser");
        localStorage.removeItem("rememberPass");
    }
});

document.addEventListener("DOMContentLoaded", function checkRememberMe(){
    if (remembered === "true"){
        document.getElementById("username").value = localStorage.getItem("rememberUser");
        document.getElementById("password").value = localStorage.getItem("rememberPass");
        document.getElementById("remember").checked = true;
    }
});

