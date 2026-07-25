// =======================================================
// ADMIN DASHBOARD AUTH CHECK
// =======================================================


import {

auth

}

from

"../../js/firebase.js";



import {

onAuthStateChanged,
signOut

}

from

"https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";





onAuthStateChanged(

auth,

(user)=>{


if(!user){


window.location.href =
"login.html";


}



});





const logout =
document.querySelector("#logout");



if(logout){


logout.onclick = async()=>{


await signOut(auth);


window.location.href =
"login.html";


};


}
