import EmailValidator from 'email-validator'

const menuBtn = document.querySelector(".menu-toggle");
const closeMenuBtn = document.querySelector('.close-menu')
const nav = document.querySelector(".nav-bar");
const navLinks = document.querySelector(".nav-links")
const main = document.querySelector(".main-content")
const targetSvg = document.querySelector(".target-svg");

const toggleArticleBtn = document.querySelectorAll(".toggle-article")

const articleContainer = document.querySelectorAll('.article-container');
const liContainer = document.querySelectorAll(".question");

const tabContainer = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");
const feature = document.querySelector(".feature");
const featureContainer = document.querySelector(".feature-container")
const userEmail = document.querySelector(".user-email");
const errorMsg = document.querySelector(".input-error");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(!EmailValidator.validate(userEmail.value)){
        errorMsg.classList.remove("hidden");
    }else{
        errorMsg.classList.add("hidden");
        
    }
} )

userEmail.addEventListener("input",(e)=>{
    e.preventDefault();
    if(!EmailValidator.validate(e.currentTarget.value)){
        errorMsg.classList.remove("hidden");
    }else{
        errorMsg.classList.add("hidden")
    }
})


menuBtn.addEventListener("click", () => {

    nav.classList.add("fixed", "bg-[hsla(229,31%,21%,0.9)]", "min-h-screen", "z-100");
    navLinks.classList.remove("hidden");
    menuBtn.classList.add("hidden");
    closeMenuBtn.classList.remove("hidden");
    main.classList.add("pt-[5.56rem]")
    targetSvg.setAttribute('fill', "#ffff")
})
closeMenuBtn.addEventListener("click", () => {
    nav.classList.remove("fixed", "bg-[hsla(229,31%,21%,0.9)]", "min-h-screen", "z-100");
    navLinks.classList.add("hidden");
    menuBtn.classList.remove("hidden");
    closeMenuBtn.classList.add("hidden");
    main.classList.remove("pt-[5.56rem]");
    targetSvg.setAttribute('fill', "#242A45")
})

toggleArticleBtn.forEach((arrowBtn) => {
    arrowBtn.addEventListener("click", () => dispayArticle(arrowBtn));
})

function dispayArticle(arrowBtn) {
    let parent = arrowBtn.parentElement.parentElement;
    parent.classList.toggle("open");
    liContainer.forEach(item => {
        if (item != parent) {
            item.classList.remove("open");
        }
    })

}

feature.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
        featureContainer.scrollIntoView();
    } ;
    const id = e.target.dataset.id;
    if (id) {
        tabContainer.forEach((btn) => {
            btn.classList.remove("active");
        })
        e.target.classList.add("active")
        content.forEach(item => item.classList.remove('active'))
        const element = document.getElementById(id);
        element.classList.add("active")
    }
})
