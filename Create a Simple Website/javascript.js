// const header = document.querySelector("header");

// window.addEventListener ("scroll", fuction(){
//     header.classList.toggle ("sticky", this.window.scrollY > 0);
// })


 const hamburger =document.querySelector(".hamburger");
 const navMenu =document.querySelector(".nav-menu");


 hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
 })


 document.querySelectorAll(".nav-link").forEach(n=> n. 
    addEventListener("click", () =>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))