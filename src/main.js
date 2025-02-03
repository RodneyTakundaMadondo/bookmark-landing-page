const menuBtn = document.querySelector(".menu-toggle");
const closeMenuBtn = document.querySelector('.close-menu')
const nav = document.querySelector(".nav-bar");
const navLinks = document.querySelector(".nav-links")
const main = document.querySelector(".main-content")

menuBtn.addEventListener("click",()=>{
    //give nav a class of fixed
    //give nav a class of bg-[hsla(229,31%,21%,0.9)]
    //give nav a class of min-h-screen
    // remove class hidden from nav-links;
    nav.classList.add("fixed","bg-[hsla(229,31%,21%,0.9)]","min-h-screen","z-100");
    navLinks.classList.remove("hidden");
    menuBtn.classList.add("hidden");
    closeMenuBtn.classList.remove("hidden");
    main.classList.add("pt-[5.56rem]")
})
closeMenuBtn.addEventListener("click",()=>{
    nav.classList.remove("fixed","bg-[hsla(229,31%,21%,0.9)]","min-h-screen","z-100");
    navLinks.classList.add("hidden");
    menuBtn.classList.remove("hidden");
    closeMenuBtn.classList.add("hidden");
    main.classList.remove("pt-[5.56rem]")
})