import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBoT8sx0SaLfKrLWen1U_ngAMNhXZqP1ZI",
    authDomain: "laundry-app-58ebe.firebaseapp.com",
    projectId: "laundry-app-58ebe",
    storageBucket: "laundry-app-58ebe.appspot.com",
    messagingSenderId: "1033993816226",
    appId: "1:1033993816226:web:36e37551488bd244026ffb",
    measurementId: "G-V7FV7J9EZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Auth object for the default app
const auth = getAuth(app);

window.onload = () => {
  const wrappper=document.querySelector('.wrapper');
  const loginLink = document.querySelector('.login-link');
  const registerLink= document.querySelector('.register-link');
  const btnPopup = document.querySelector('.btnLogin-popup');
  const iconClose = document.querySelector('.icon-close');
  const loginBtn = document.querySelector('#login');
  const emailInp = document.querySelector('#email');
  const emailError = document.querySelector('.email-error');
  const password = document.querySelector('#password1')
  const spassword = document.querySelector("#signupPassword")
  const semail = document.querySelector("#signupEmail")
  const btn = document.querySelector("#button")

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

  const Test = async() =>{

    signInWithEmailAndPassword(auth, emailInp.value, password.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         console.log(user.email)
        })
        .catch((error) => {
          alert("Incorrect email or password")
        });

  }

  const register = async () =>{
    createUserWithEmailAndPassword (auth, semail.value, spassword.value)
        .then((userCredential) => {
        
          alert("Successfully Registered, you can now log in to your account.😊!")
         
        })
        .catch((error) => {
          alert("An error has occured try to register again. Email format is incorrect😢!!!")
        });
  }

  btn.addEventListener('click', (e)=>{
    e.preventDefault()

    register()
    window.location.assign()

  })

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (emailInp.value.slice(-10).toLowerCase() != "@gmail.com") {
      emailError.innerText = "invalid Email Address"
      return emailError.style.color = "red"
    }

    else {
      // Sign up with email and password
      Test()
            
      emailError.innerText = "Email Valid"
      emailError.style.color = "green"
      window.location.assign("home.html");
    }
  })


}


