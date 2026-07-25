// =======================================================
// DALUBWIKAAN PORTAL
// DOCUMENTS.JS
// FIREBASE READY DOCUMENT ARCHIVE
// =======================================================


// =========================================
// DOCUMENT DATA
// TEMPORARY DATA
// Papalitan ng Firebase later
// =========================================

const documents = [

    {
        title: "Financial Reports",

        description:
        "Mga ulat pinansyal at budget reports ng organisasyon.",

        category:
        "Finance",

        icon:
        "fa-file-lines"
    },


    {
        title: "Receipts",

        description:
        "Mga resibo at patunay ng mga transaksyon.",

        category:
        "Transparency",

        icon:
        "fa-receipt"
    },


    {
        title: "Project Documents",

        description:
        "Mga dokumento kaugnay ng mga programa at proyekto.",

        category:
        "Programs",

        icon:
        "fa-folder"
    }

];




// =========================================
// LOAD DOCUMENTS
// =========================================


function loadDocuments(){


    const documentContainer =
    document.querySelector(".document-grid");



    if(!documentContainer)
    return;



    documentContainer.innerHTML = "";



    documents.forEach((doc)=>{


        const card =
        document.createElement("div");



        card.className =
        "document-card";



        card.innerHTML = `


            <div class="document-icon">

                <i class="fa-solid ${doc.icon}"></i>

            </div>



            <div class="document-content">


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



            <button 
            class="btn btn-primary document-view"
            data-document="${doc.title}">


                <i class="fa-solid fa-eye"></i>

                Tingnan


            </button>



        `;



        documentContainer.appendChild(card);



    });



    activateDocumentButtons();


}






// =========================================
// DOCUMENT BUTTON ACTION
// =========================================


function activateDocumentButtons(){


    const buttons =
    document.querySelectorAll(".document-view");



    buttons.forEach((button)=>{


        button.addEventListener(
        "click",
        ()=>{


            const documentName =
            button.dataset.document;



            alert(

            `${documentName}

            \n\nAng dokumento ay magiging available kapag nakakonekta na ang Firebase Storage.`

            );


        });


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
