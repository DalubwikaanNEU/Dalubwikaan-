// =======================================================
// DALUBWIKAAN PORTAL
// DOCUMENTS.JS
// FIREBASE READY DOCUMENT ARCHIVE
// =======================================================



// =========================================
// DOCUMENT CONTAINER
// =========================================

const documentContainer = document.querySelector(
    ".document-grid"
);





// =========================================
// TEMPORARY DATA
// (Papaltan ng Firebase)
// =========================================


const documents = [

    {
        title:
        "Financial Reports",

        description:
        "Mga ulat pinansyal at budget reports ng organisasyon.",

        category:
        "Finance",

        icon:
        "fa-file-lines"
    },


    {
        title:
        "Receipts",

        description:
        "Mga resibo at patunay ng mga transaksyon.",

        category:
        "Transparency",

        icon:
        "fa-receipt"
    },


    {
        title:
        "Project Documents",

        description:
        "Mga dokumento kaugnay ng mga programa at proyekto.",

        category:
        "Programs",

        icon:
        "fa-folder"
    }


];





// =========================================
// DISPLAY DOCUMENTS
// =========================================


function loadDocuments(){


    if(!documentContainer)
    return;



    documentContainer.innerHTML = "";



    documents.forEach(doc => {


        const card = document.createElement("div");


        card.className =
        "document-card";



        card.innerHTML = `


        <div class="document-icon">

            <i class="fa-solid ${doc.icon}"></i>

        </div>



        <div>

            <h3>
            ${doc.title}
            </h3>


            <p>
            ${doc.description}
            </p>


            <span>
            ${doc.category}
            </span>

        </div>



        <a href="#"
        class="btn btn-primary">


        <i class="fa-solid fa-eye"></i>

        Tingnan


        </a>



        `;



        documentContainer.appendChild(card);


    });



}





// =========================================
// INITIALIZE
// =========================================


document.addEventListener(
"DOMContentLoaded",
()=>{

    loadDocuments();

});
