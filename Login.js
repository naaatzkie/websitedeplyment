function login() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    if(username === "admin" && password === "123") {
        alert("Login successful!");
        window.location.href = "Newportfolio.html";
    } else {
        alert("Invalid username or password.");
    }
}