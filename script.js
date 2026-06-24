function login() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    
    if (email && password) {
        alert("Ийгиликтүү кирдиңиз!");
    } else {
        alert("Сураныч, бардык талааларды толтуруңуз!");
    }
}

function register() {
    let name = document.getElementById('reg-name').value;
    let email = document.getElementById('reg-email').value;
    let password = document.getElementById('reg-password').value;
    
    if (name && email && password) {
        alert("Ийгиликтүү катталдыңыз!");
    } else {
        alert("Сураныч, бардык талааларды толтуруңуз!");
    }
}