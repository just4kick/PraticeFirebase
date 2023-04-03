import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE-rY9MQAu9cST3TlrmbJrfeA9p0p4MrI",
  authDomain: "super-a2b50.firebaseapp.com",
  projectId: "super-a2b50",
  storageBucket: "super-a2b50.appspot.com",
  messagingSenderId: "1064252591395",
  appId: "1:1064252591395:web:6386ea8bac0b42dcc5d096",
  measurementId: "G-VWY5B7S7Y4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// All APP RELATED WORK

// DISPLAY REGISTER SECTION

const regsection = document.querySelector("#registersection");
regsection.addEventListener("click",(e)=>
{
    e.preventDefault();
   
    if(document.getElementById("registerform").style.display==="none")
    {
    reg.style.display="block";
    login.style.display="none";
    regsection.innerHTML="Login"
}
else
{
    reg.style.display="none";
    login.style.display="block";
    regsection.innerHTML="Register"
}
})

// STATE MANAGER
onAuthStateChanged(auth,user => 
    {
        if(user)
        {
            reg.style.display="none";
            login.style.display="none"
            document.getElementById("test").style.display="block";   
            regsection.style.display="none";
        }
        else{
            regsection.style.display="block";
            if(regsection.innerHTML==="Login"){
            regsection.innerHTML="Register";
            }
        }
        
    })




// REGISTER CODE

const reg = document.querySelector("#registerform")
reg.addEventListener("submit",(e)=>
{
    e.preventDefault();
    const email = reg["email"].value;
    const pass = reg["password"].value;
    // CONNENTING FIREBASE

    createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    if(userCredential.user)
    {
        console.log("account created");
    }
    
   
     })
   
})

// LOGOUT
const logout = document.querySelector("#logout");
logout.addEventListener("click",(e)=>
{
    e.preventDefault();
    auth.signOut(auth).then(()=>
    {
        console.log("logout");
        regsection.innerHTML="Login"
        reg.style.display="block";
        document.getElementById("test").style.display="none";
    })
})

// LOGIN
const login = document.querySelector("#loginform");
login.addEventListener("submit",(e)=>
{
    e.preventDefault();
    const email = login["loginemail"].value;
    const pass = login["loginpassword"].value;
    
    signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log("login")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });


})