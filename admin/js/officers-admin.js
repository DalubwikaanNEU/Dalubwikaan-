// =======================================================
// DALUBWIKAAN ADMIN
// OFFICERS MANAGEMENT SYSTEM
// FIREBASE CRUD
// ADD / EDIT / DELETE
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
orderBy,
updateDoc

}

from

"https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";




// =========================================
// ELEMENTS
// =========================================


const saveButton =
document.querySelector("#saveOfficer");


const list =
document.querySelector("#officerList");


const nameInput =
document.querySelector("#name");


const positionInput =
document.querySelector("#position");


const descriptionInput =
document.querySelector("#description");


const orderInput =
document.querySelector("#order");


let editingID = null;




// =========================================
// SAVE / UPDATE OFFICER
// =========================================


saveButton.onclick = async()=>{


const name =
nameInput.value.trim();


const position =
positionInput.value.trim();


const description =
descriptionInput.value.trim();


const order =
Number(orderInput.value) || 999;



if(!name || !position){

alert(
"Pakilagay ang pangalan at posisyon."
);

return;

}




// UPDATE MODE

if(editingID){


await updateDoc(

doc(
db,
"officers",
editingID
),

{

name,
position,
description,
order

}

);



alert(
"Na-update ang opisyal."
);



editingID = null;


saveButton.innerHTML =
"Save Officer";



}




// ADD MODE

else{


await addDoc(

collection(db,"officers"),

{

name,
position,
description,
order

}

);



alert(
"Naidagdag ang opisyal."
);


}




clearForm();

loadOfficers();


};






// =========================================
// LOAD OFFICERS
// =========================================


async function loadOfficers(){


list.innerHTML =
"Loading officers...";



const q = query(

collection(db,"officers"),

orderBy("order")

);



const snapshot =
await getDocs(q);



list.innerHTML = "";




snapshot.forEach(item=>{


const data =
item.data();



list.innerHTML +=

`

<div class="admin-card">


<h3>
${data.name}
</h3>


<p>
${data.position}
</p>


<p>
${data.description || ""}
</p>



<button onclick="editOfficer('${item.id}')">

Edit

</button>



<button onclick="deleteOfficer('${item.id}')">

Delete

</button>



</div>

`;



});



}






// =========================================
// EDIT OFFICER
// =========================================


window.editOfficer = async(id)=>{


const officerRef =
doc(
db,
"officers",
id
);



const snapshot =
await getDocs(
collection(db,"officers")
);



snapshot.forEach(item=>{


if(item.id === id){


const data =
item.data();



nameInput.value =
data.name;


positionInput.value =
data.position;


descriptionInput.value =
data.description || "";


orderInput.value =
data.order || "";



editingID = id;



saveButton.innerHTML =
"Update Officer";



}


});



};








// =========================================
// DELETE OFFICER
// =========================================


window.deleteOfficer = async(id)=>{


const confirmDelete =
confirm(
"Sigurado ka bang buburahin ito?"
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



alert(
"Nabura ang opisyal."
);



loadOfficers();


};








// =========================================
// CLEAR FORM
// =========================================


function clearForm(){


nameInput.value="";

positionInput.value="";

descriptionInput.value="";

orderInput.value="";

document.querySelector("#photo").value="";


}




// =========================================
// INITIAL LOAD
// =========================================


loadOfficers();
