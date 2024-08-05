let email = document.getElementById('Email');
let psw = document.getElementById('Password');
let login = document.getElementById('login-form');

login.addEventListener('submit', function(event){
    event.preventDefault();    
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Password", psw.value);
    localStorage.clear();
})