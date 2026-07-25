// =======================================================
// DALUBWIKAAN PORTAL
// FIREBASE CONFIGURATION
// =======================================================


import {
    initializeApp
}
from
"https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";


import {
    getFirestore
}
from
"https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";


import {
    getStorage
}
from
"https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";


import {
    getAuth
}
from
"https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";




// =========================================
// FIREBASE CONFIG
// =========================================


const firebaseConfig = {


    apiKey:
    "AIzaSyCC9ExceSTteMCMH-vinG271_UgY8xxF3w",


    authDomain:
    "dalubwikaan.firebaseapp.com",


    projectId:
    "dalubwikaan",


    storageBucket:
    "dalubwikaan.firebasestorage.app",


    messagingSenderId:
    "716234144487",


    appId:
    "1:716234144487:web:db22a1dfc5c93773e2c042"


};





// =========================================
// INITIALIZE FIREBASE
// =========================================


const app =
initializeApp(firebaseConfig);





// =========================================
// SERVICES
// =========================================


const db =
getFirestore(app);



const storage =
getStorage(app);



const auth =
getAuth(app);





export {

    app,

    db,

    storage,

    auth

};
