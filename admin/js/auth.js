// =======================================================
// DALUBWIKAAN ADMIN AUTHENTICATION
// =======================================================


import {

auth

}

from

"../../js/firebase.js";



import {

signInWithEmailAndPassword

}

from

"https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";





const loginButton =
document.querySelector("#loginBtn");





loginButton.addEventListener(
"click",
async()=>{


const email =
document.querySelector("#email").value;



const password =
document.querySelector("#password").value;




const message =
document.querySelector("#message");



try{


await signInWithEmailAndPassword(

auth,

email,

password

);



message.innerHTML =
"Login successful!";



window.location.href =
"dashboard.html";



}


catch(error){


console.log(error);



message.innerHTML =
"Maling email o password.";


}



});
