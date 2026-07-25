// ======================================================
// DALUBWIKAAN PORTAL
// APP.JS
// FINAL VERSION 2.0
// MOBILE + DESKTOP OPTIMIZED
// ======================================================


document.addEventListener("DOMContentLoaded", () => {


    initializeNavigation();

    initializeHeader();

    initializeSmoothScroll();

    initializeScrollReveal();

    initializeActiveNavigation();

    initializeCounters();

    initializeBackToTop();

    initializeGallery();

    initializeCurrentYear();


});




// ======================================================
// MOBILE NAVIGATION
// ======================================================


function initializeNavigation(){


    const menuButton = document.getElementById("menuButton");

    const mobileMenu = document.getElementById("mobileMenu");


    if(!menuButton || !mobileMenu) return;



    // OPEN / CLOSE MENU

    menuButton.addEventListener("click", (e)=>{


        e.stopPropagation();


        mobileMenu.classList.toggle("active");


    });




    // CLOSE WHEN LINK CLICKED

    const links = mobileMenu.querySelectorAll("a");


    links.forEach(link=>{


        link.addEventListener("click",()=>{


            mobileMenu.classList.remove("active");


        });


    });





    // CLOSE WHEN CLICK OUTSIDE


    document.addEventListener("click",(e)=>{


        const clickedInsideMenu = mobileMenu.contains(e.target);

        const clickedButton = menuButton.contains(e.target);



        if(!clickedInsideMenu && !clickedButton){


            mobileMenu.classList.remove("active");


        }


    });





    // CLOSE USING ESC KEY


    document.addEventListener("keydown",(e)=>{


        if(e.key === "Escape"){


            mobileMenu.classList.remove("active");


        }


    });



}






// ======================================================
// STICKY HEADER
// ======================================================


function initializeHeader(){


    const header = document.getElementById("header");


    if(!header) return;



    function updateHeader(){


        if(window.scrollY > 50){


            header.classList.add("scrolled");


        }else{


            header.classList.remove("scrolled");


        }


    }



    window.addEventListener("scroll",updateHeader);


    updateHeader();


}






// ======================================================
// SMOOTH SCROLL
// ======================================================


function initializeSmoothScroll(){


    const links = document.querySelectorAll('a[href^="#"]');



    links.forEach(link=>{


        link.addEventListener("click",function(e){


            const target = document.querySelector(
                this.getAttribute("href")
            );



            if(!target) return;



            e.preventDefault();



            target.scrollIntoView({


                behavior:"smooth",

                block:"start"


            });



        });



    });



}






// ======================================================
// SCROLL REVEAL
// ======================================================


function initializeScrollReveal(){


    const reveals = document.querySelectorAll(".reveal");


    if(!reveals.length) return;



    const observer = new IntersectionObserver(
        
        entries=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("active");


                    observer.unobserve(entry.target);


                }


            });


        },


        {

            threshold:.15

        }


    );



    reveals.forEach(item=>{


        observer.observe(item);


    });



}






// ======================================================
// ACTIVE NAVIGATION
// ======================================================


function initializeActiveNavigation(){


    const sections = document.querySelectorAll("section[id]");


    const navLinks = document.querySelectorAll(
        "#navbar a"
    );



    if(!sections.length) return;



    window.addEventListener("scroll",()=>{


        let current="";



        sections.forEach(section=>{


            const sectionTop = section.offsetTop - 150;



            if(window.scrollY >= sectionTop){


                current = section.id;


            }


        });




        navLinks.forEach(link=>{


            link.classList.remove("active");



            if(
                link.getAttribute("href") === "#" + current
            ){


                link.classList.add("active");


            }



        });



    });



}






// ======================================================
// COUNTER ANIMATION
// ======================================================


function initializeCounters(){


    const counters = document.querySelectorAll("[data-counter]");


    if(!counters.length) return;



    const observer = new IntersectionObserver(entries=>{


        entries.forEach(entry=>{


            if(!entry.isIntersecting) return;



            const counter = entry.target;


            const target = Number(counter.dataset.counter);



            let start = 0;


            const duration = 1500;


            const step = target / (duration / 16);



            function update(){


                start += step;



                if(start < target){


                    counter.textContent =
                    Math.floor(start).toLocaleString();



                    requestAnimationFrame(update);


                }else{


                    counter.textContent =
                    target.toLocaleString();



                }



            }



            update();



            observer.unobserve(counter);



        });



    });



    counters.forEach(counter=>{


        observer.observe(counter);


    });



}






// ======================================================
// BACK TO TOP
// ======================================================


function initializeBackToTop(){


    const button = document.getElementById("backToTop");


    if(!button) return;



    window.addEventListener("scroll",()=>{


        button.classList.toggle(
            "show",
            window.scrollY > 400
        );


    });



    button.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });



    });



}






// ======================================================
// GALLERY
// ======================================================


function initializeGallery(){


    const items = document.querySelectorAll(".gallery-item");


    items.forEach(item=>{


        item.addEventListener("mouseenter",()=>{


            item.classList.add("hover");


        });



        item.addEventListener("mouseleave",()=>{


            item.classList.remove("hover");


        });



    });



}






// ======================================================
// CURRENT YEAR
// ======================================================


function initializeCurrentYear(){


    const year =
    document.getElementById("currentYear");



    if(!year) return;



    year.textContent =
    new Date().getFullYear();


}






// ======================================================
// PAGE LOADED
// ======================================================


window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});


// ======================================================
// END OF FILE
// ======================================================
