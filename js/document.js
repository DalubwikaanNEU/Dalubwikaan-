// =======================================================
// DALUBWIKAAN PORTAL
// DOCUMENTS.JS
// DOCUMENT ARCHIVE SYSTEM
// =======================================================



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





function loadDocuments(){


    const container =
    document.querySelector(".document-grid");



    console.log("Document container:", container);



    if(!container){

        console.error(
        "Walang .document-grid na nakita!"
        );

        return;

    }



    container.innerHTML = "";



    documents.forEach(doc=>{


        container.innerHTML += `


        <article class="document-card">


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
            class="btn btn-primary document-view">


                <i class="fa-solid fa-eye"></i>

                Tingnan


            </button>



        </article>


        `;


    });



}





// LOAD DIRECTLY

loadDocuments();
