const userLoggedIn = localStorage.getItem("loggedIn");
const usernameLogIn = localStorage.getItem("username");

function logOut(){
    localStorage.removeItem("loggedIn");
}

if (userLoggedIn === "true"){
    document.getElementById("welcomeMessage").innerHTML = "Welcome, " + usernameLogIn + "!";
    document.getElementById("loginNav").innerHTML = "Log Out";
    document.getElementById("loginNav").addEventListener("click", logOut);
}