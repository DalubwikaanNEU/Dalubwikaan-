// =======================================================
// DALUBWIKAAN ADMIN
// OFFICERS CRUD SYSTEM
// FIREBASE FIRESTORE + STORAGE
// =======================================================



import {

db,

storage

}

from

"../../js/firebase.js";



import {

collection,

addDoc,

getDocs,

deleteDoc,

doc

}

from

"https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";



import {

ref,

uploadBytes,

getDownloadURL

}

from

"https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";




// ELEMENTS


const saveButton =
document.querySelector("#saveOfficer");


const list =
document.querySelector("#officerList");





// SAVE OFFICER


saveButton.onclick = async()=>{


const name =
document.querySelector("#name").value;


const position =
document.querySelector("#position").value;


const description =
document.querySelector("#description").value;


const order =
Number(
document.querySelector("#order").value
);



const file =
document.querySelector("#photo").files[0];



let photoURL = "";





if(file){


const storageRef =
ref(
storage,
"officers/" + file.name
);



await uploadBytes(
storageRef,
file
);



photoURL =
await getDownloadURL(
storageRef
);



}






await addDoc(

collection(db,"officers"),

{


name,

position,

description,

order,

photo:photoURL


}

);




alert(
"Officer added successfully!"
);



loadOfficers();



};







// LOAD OFFICERS


async function loadOfficers(){


list.innerHTML="";



const snapshot =
await getDocs(
collection(db,"officers")
);



snapshot.forEach(item=>{


const data =
item.data();



list.innerHTML += `


<div class="admin-card">


<h3>
${data.name}
</h3>


<p>
${data.position}
</p>



<button onclick="deleteOfficer('${item.id}')">

Delete

</button>



</div>


`;



});


}






// DELETE


window.deleteOfficer = async(id)=>{


await deleteDoc(

doc(db,"officers",id)

);



loadOfficers();


};






loadOfficers();
