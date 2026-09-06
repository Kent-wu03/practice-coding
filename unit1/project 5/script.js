root = document.getElementById('root')
let mytext = 'hello world'
let nama = document.getElementById('usernameinput')
let pass = document.getElementById('passinput')
let admin = document.getElementById('admin')
let biasa = document.getElementById('userbiasa')
let vip = document.getElementById('vip')
let loginbutton = document.getElementById('loginbutton')
let logoutbutton = document.getElementById('logoutbutton')

root.style.backgroundColor = "tomato";
root.style.color - "white";
root.style.fontSize = "2em";
root.style.textAlign = "center";
root.style.height = "100vh"

admin.style.display = "none";
biasa.style.display = "none";
vip.style.display = "none";
logoutbutton.style.display = "none";


function onlogin() {
    localStorage.setItem("username",usernameinput.value)
    if (usernameinput.value == "" || passinput.value == "") {
        alert("tidak ada password/username")
    }else {
        logoutbutton.style.display = "block";

        if (usernameinput.value == "rocky" && passinput.value == "admin123") {
            localStorage.setItem("role","admin")
            usernameinput.style.display = "none";
            passinput.style.display = "none";
            loginbutton.style.display = "none";
            biasa.style.display = "none";
            vip.style.display = "none";
            admin.style.display = "block";  
        }else if (usernameinput.value == "vip" && passinput.value == "vip123"){
            localStorage.setItem("role", "vip")
            usernameinput.style.display = "none";
            passinput.style.display = "none";
            loginbutton.style.display = "none";
            biasa.style.display = "none";
            vip.style.display = "block";
            admin.style.display = "none";
        }else {
            localStorage.setItem("role","biasa")
            usernameinput.style.display = "none";
            passinput.style.display = "none";
            loginbutton.style.display = "none";
            biasa.style.display = "block";
            vip.style.display = "none";
            admin.style.display = "none";
        }

        if (localStorage.getItem("role") == "admin") {
            root.style.backgroundColor = "green";
        }else if (localStorage.getItem("role") == "vip") {
            root.style.backgroundColor = "yellow";
        }else {
            root.style.backgroundColor = "aqua";
        }
    }
    
}

if (localStorage.getItem("username")) {
    logoutbutton.style.display = "block";
    usernameinput.style.display = "none";
    passinput.style.display = "none";
    loginbutton.style.display = "none";
    
    if (localStorage.getItem("role") == "admin") {
        biasa.style.display = "none";
        admin.style.display = "block";
    }else {
        biasa.style.display = "block";
        admin.style.display = "none";
    }

    if (localStorage.getItem("role") == "admin") {
            root.style.backgroundColor = "green";
        }else if (localStorage.getItem("role") == "vip") {
            root.style.backgroundColor = "yellow";
        }else {
            root.style.backgroundColor = "aqua";
        }
}

function onlogout() {
    localStorage.clear();
    location.reload();
}

function register() {
    page.innerHTML = "REGISTER PAGE";
}

function login() {
    page.innerHTML = "LOGIN PAGE"
}

