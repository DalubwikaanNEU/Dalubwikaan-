// =======================================================
// DALUBWIKAAN PORTAL
// DOCUMENTS.JS
// FIREBASE READY DOCUMENT ARCHIVE
// =======================================================



console.log("DOCUMENTS JS CONNECTED");




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


    const container =
    document.querySelector(".document-grid");



    if(!container){


        console.error(
        "Document container not found."
        );


        return;


    }



    container.innerHTML = "";





    documents.forEach((doc)=>{



        const card =
        document.createElement("div");



        card.classList.add(
        "document-card"
        );




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
        type="button"
        class="btn btn-primary document-view"
        data-title="${doc.title}">


            <i class="fa-solid fa-eye"></i>


            Tingnan



        </button>



        `;




        container.appendChild(card);



    });




    setupDocumentButtons();



}







// =========================================
// BUTTON FUNCTIONS
// =========================================


function setupDocumentButtons(){



    const buttons =
    document.querySelectorAll(
    ".document-view"
    );



    buttons.forEach((button)=>{



        button.addEventListener(
        "click",
        ()=>{



            const title =
            button.dataset.title;




            alert(

            `${title}

Ang dokumento ay magiging available kapag nakakonekta na ang Firebase Storage.`

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
