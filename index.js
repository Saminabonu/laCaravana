const menu = document.querySelector(".mmm");
const modal = document.querySelector(".modal");
const home = document.querySelector(".home");
const aboutUs = document.querySelector(".us");
const contacts = document.querySelector(".cont");

const main = document.querySelector(".main");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const navbar = document.querySelector("nav");
const all = document.querySelector(".all")

menu.addEventListener("click", ()=>{
    modal.classList.toggle("show")
all.classList.toggle("hide")
});

const sectionScroll = (section)=>{
    const chart = section.getBoundingClientRect();

    window.scrollTo({
        left: chart.left,
        top: chart.top + window.scrollY - navbar.getBoundingClientRect().height,
        behavior: "smooth"
    })
}

aboutUs.addEventListener("click", ()=>{
    sectionScroll(about);  
})

home.addEventListener("click", ()=>{
    sectionScroll(main)
})

contacts.addEventListener("click", ()=>{
    sectionScroll(contact)
})

