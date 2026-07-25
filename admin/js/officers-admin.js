// =======================================================
// DALUBWIKAAN ADMIN
// OFFICERS MANAGEMENT SYSTEM
// FIREBASE FIRESTORE + STORAGE
// ADD / DELETE READY
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
doc,
query,
orderBy

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





// =========================================
// ELEMENTS
// =========================================


const saveButton =
document.querySelector("#saveOfficer");


const list =
document.querySelector("#officerList");






// =========================================
// ADD OFFICER
// =========================================


saveButton.onclick = async()=>{


const name =
document.querySelector("#name").value.trim();



const position =
document.querySelector("#position").value.trim();



const description =
document.querySelector("#description").value.trim();



const order =
Number(
document.querySelector("#order").value
);



const file =
document.querySelector("#photo").files[0];





if(
!name ||
!position
){


alert(
"Pakilagay ang pangalan at posisyon."
);


return;


}





let photoURL = "";





// =========================================
// UPLOAD IMAGE
// =========================================


if(file){


const imageRef =

ref(

storage,

`officers/${Date.now()}-${file.name}`

);



await uploadBytes(

imageRef,

file

);



photoURL =

await getDownloadURL(

imageRef

);


}








// =========================================
// SAVE FIRESTORE
// =========================================


await addDoc(

collection(db,"officers"),

{


name:name,

position:position,

description:description,

order:order || 999,

photo:photoURL


}

);





alert(

"Matagumpay na naidagdag ang opisyal."

);





// CLEAR FORM


document.querySelector("#name").value="";
document.querySelector("#position").value="";
document.querySelector("#description").value="";
document.querySelector("#order").value="";
document.querySelector("#photo").value="";





loadOfficers();



};









// =========================================
// LOAD OFFICERS
// =========================================


async function loadOfficers(){


list.innerHTML =

"Loading officers...";





const q =

query(

collection(db,"officers"),

orderBy("order")

);



const snapshot =

await getDocs(q);





list.innerHTML="";





if(snapshot.empty){


list.innerHTML=

`

<p>
Wala pang officers.
</p>

`;


return;


}






snapshot.forEach((item)=>{


const data = item.data();





list.innerHTML +=



`

<div class="admin-card">



${

data.photo

?

`

<img 
src="${data.photo}"
class="officer-preview">

`

:

""

}





<h3>

${data.name}

</h3>




<p>

${data.position}

</p>




<p>

${data.description || ""}

</p>




<button
onclick="deleteOfficer('${item.id}')">


<i class="fa-solid fa-trash"></i>

Delete


</button>



</div>


`;



});



}








// =========================================
// DELETE OFFICER
// =========================================


window.deleteOfficer = async(id)=>{


const confirmDelete =

confirm(

"Sigurado ka bang gusto mong burahin ito?"

);



if(!confirmDelete)

return;





await deleteDoc(

doc(

db,

"officers",

id

)

);





loadOfficers();



};






// INITIAL LOAD

loadOfficers();
