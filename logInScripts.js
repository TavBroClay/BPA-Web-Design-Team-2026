const userLoggedIn = localStorage.getItem("loggedIn");
const usernameLoggedIn = localStorage.getItem("username");

function logOut(){
    localStorage.removeItem("loggedIn");
}

if (userLoggedIn === "true"){
    document.getElementById("welcomeMessage").innerHTML = "Welcome, " + usernameLoggedIn + "!";
    document.getElementById("loginNav").innerHTML = "Log Out";
    document.getElementById("loginNav").addEventListener("click", logOut);
}