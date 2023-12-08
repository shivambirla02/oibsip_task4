let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

function signin(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disabled");
    signinBtn.classList.remove("disabled");
}
function signup(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign up";
    signupBtn.classList.remove("disabled");
    signinBtn.classList.add("disabled");
}