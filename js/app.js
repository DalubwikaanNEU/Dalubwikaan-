// ======================================================
// DALUBWIKAAN PORTAL
// APP.JS
// VERSION 1.0
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

    initializeScrollReveal();

    initializeSmoothScroll();

    initializeHeader();

    initializeCounters();

});


// ======================================================
// MOBILE NAVIGATION
// ======================================================

function initializeNavigation(){

    const menuButton = document.getElementById("menuButton");

    const mobileMenu = document.getElementById("mobileMenu");

    if(!menuButton || !mobileMenu) return;

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

    const links = mobileMenu.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });

}


// ======================================================
// STICKY HEADER
// ======================================================

function initializeHeader(){

    const header = document.getElementById("header");

    if(!header) return;

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });

}


// ======================================================
// SMOOTH SCROLL
// ======================================================

function initializeSmoothScroll(){

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link=>{

        link.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

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
// CONTINUE IN PART 2
// ======================================================
// ======================================================
// SCROLL REVEAL ANIMATION
// ======================================================

function initializeScrollReveal(){

    const reveals = document.querySelectorAll(".reveal");

    if(!reveals.length) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:0.15

    });

    reveals.forEach(item=>{

        observer.observe(item);

    });

}


// ======================================================
// ACTIVE NAVIGATION
// ======================================================

function initializeActiveNavigation(){

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll('#navbar a[href^="#"]');

    if(!sections.length || !navLinks.length) return;

    window.addEventListener("scroll",()=>{

        let current = "";

        sections.forEach(section=>{

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.offsetHeight;

            if(window.scrollY >= sectionTop){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

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

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.counter);

            const duration = 1800;

            const startTime = performance.now();

            function update(now){

                const progress = Math.min((now - startTime) / duration,1);

                const value = Math.floor(progress * target);

                counter.textContent = value.toLocaleString();

                if(progress < 1){

                    requestAnimationFrame(update);

                }

            }

            requestAnimationFrame(update);

            observer.unobserve(counter);

        });

    },{

        threshold:.4

    });

    counters.forEach(counter=>{

        observer.observe(counter);

    });

}


// ======================================================
// INITIALIZE ACTIVE NAVIGATION
// ======================================================

document.addEventListener("DOMContentLoaded",()=>{

    initializeActiveNavigation();

});


// ======================================================
// CONTINUE IN PART 3
// ======================================================
// ======================================================
// BACK TO TOP BUTTON
// ======================================================

function initializeBackToTop(){

    const button = document.getElementById("backToTop");

    if(!button) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 400){

            button.classList.add("show");

        }else{

            button.classList.remove("show");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


// ======================================================
// GALLERY HOVER EFFECT
// ======================================================

function initializeGallery(){

    const items = document.querySelectorAll(".gallery-item");

    if(!items.length) return;

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
// LOADING ANIMATION
// ======================================================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


// ======================================================
// CURRENT YEAR
// ======================================================

function initializeCurrentYear(){

    const year = document.getElementById("currentYear");

    if(!year) return;

    year.textContent = new Date().getFullYear();

}


// ======================================================
// INITIALIZE ALL COMPONENTS
// ======================================================

document.addEventListener("DOMContentLoaded",()=>{

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
// END OF FILE
// ======================================================
