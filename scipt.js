const wrappper=document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink= document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginBtn = document.querySelector('#login');
const emailInp = document.querySelector('#email');
const emailError = document.querySelector('.email-error');

registerLink.addEventListener('click', ()=> {
    wrappper.classList.add('active')
});

registerLink.addEventListener('click', () => {
    wrappper.classList.add('active')
});

loginLink.addEventListener('click', () => {
    wrappper.classList.remove('active')
});

btnPopup.addEventListener('click', () => {
    wrappper.classList.add('active-popup')
});

iconClose.addEventListener('click', () => {
    wrappper.classList.remove('active-popup')
});

iconClose.addEventListener('click', () => {
    wrappper.classList.remove('active-popup')
});

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (emailInp.value.slice(-10).toLowerCase() != "@gmail.com") {
        emailError.innerText = "invalid Email Address"
        return emailError.style.color = "red"
    }

    else emailError.innerText = "Valid"
    emailError.style.color = "green"
})

var icon = document.getElementById("icon");
icon.onclick = function(){ document.body.classList.toggle("dark-theme");
 if(document.body.classList.contains("dark-theme")){ icon.src = "images/sun.png";
}else{
icon.src = "images/moon.png";
}
}